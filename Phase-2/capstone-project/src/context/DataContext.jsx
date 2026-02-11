import { createContext, useCallback, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
// Data context to manage everything related to weather data fetching and storage in the app
export const DataContext = createContext({
  // default values for the context
  data: {},
  fetchData: () => {},
  fetchForecastData: () => {},
  defaultFetchData: () => {},
  defaultFetchForecastData: () => {},
  favoriteCities: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
  selectFavorite: () => {},
});

// DataProvider component to wrap around the app and provide data context to all components
export const DataProvider = ({ children }) => {
  // State variables to store all the required data and loading state
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState(null);
  const [favoriteCities, setFavoriteCities] = useLocalStorage(
    "favoriteCities",
    [],
  );
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  // Debug: log the API key status (remove in production)
  console.log("API Key present:", !!apiKey);

  // function to get the API key from environment variables and handle the case when it's missing
  const getApiKey = useCallback(() => {
    if (!apiKey) {
      console.error("Missing VITE_OPENWEATHER_API_KEY");
      setLoading(false);
      return null;
    }
    return apiKey;
  }, [apiKey]);

  // function to fetch data based on search term entered by the user
  const fetchData = useCallback(async (overrideTerm) => {
    setLoading(true);
    setError(null);
    try {
      const key = getApiKey();
      if (!key) return;
      const term = (overrideTerm ?? searchTerm).trim();
      if (!term) {
        throw new Error("Please enter a city name");
      }
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(term)}&appid=${key}&units=metric`,
      );
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(term)}&appid=${key}&units=metric`,
      );
      const data = await res.json();
      const forecastData = await resForecast.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to fetch weather data");
      }
      if (!resForecast.ok) {
        throw new Error(forecastData?.message || "Failed to fetch forecast data");
      }
      setData(data);
      setForecastData(forecastData);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      console.log("data fetching complete");
      setLoading(false);
    }
  }, [getApiKey, searchTerm]);

  // function to fetch data based on geolocation on the initial render of the app
  const defaultFetchData = useCallback(async (latValue = lat, lonValue = lon) => {
    setLoading(true);
    setError(null);
    try {
      const key = getApiKey();
      if (!key) return;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${lonValue}&appid=${key}&units=metric`,
      );
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=${key}&units=metric`,
      );
      const data = await res.json();
      const forecastData = await resForecast.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to fetch weather data");
      }
      if (!resForecast.ok) {
        throw new Error(forecastData?.message || "Failed to fetch forecast data");
      }
      setData(data);
      setForecastData(forecastData);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      console.log("data fetching complete");
      setLoading(false);
    }
  }, [getApiKey, lat, lon]);

  // useEffect to get the user's geolocation on the initial render and fetch data based on it
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nextLat = position.coords.latitude;
          const nextLon = position.coords.longitude;
          setLat(nextLat);
          setLon(nextLon);
          // calling the function based on cordinates obtained from geolocation to fetch data for the user's location
          defaultFetchData(nextLat, nextLon);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setLoading(false);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Refreshing data...");
      if (lat && lon && !searchTerm) {
        defaultFetchData(lat, lon);
      } else if (searchTerm && searchTerm.trim() !== "") {
        fetchData(searchTerm);
      }
    },  5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId);
  }, [lat, lon, searchTerm, defaultFetchData, fetchData]);

  const addFavorite = () => {
    const cityName = data?.name;
    if (!cityName) return;
    const country = data?.sys?.country || "";
    const exists = favoriteCities.some((city) => city.name === cityName);
    if (exists) return;
    setFavoriteCities([...favoriteCities, { name: cityName, country }]);
  };

  const removeFavorite = (cityName) => {
    setFavoriteCities(favoriteCities.filter((city) => city.name !== cityName));
  };

  const isFavorite = (cityName) => {
    return favoriteCities.some((city) => city.name === cityName);
  };

  const selectFavorite = (cityName) => {
    setSearchTerm(cityName);
    fetchData(cityName);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        forecastData,
        searchTerm,
        setSearchTerm,
        loading,
        fetchData,
        defaultFetchData,
        error,
        favoriteCities,
        addFavorite,
        removeFavorite,
        isFavorite,
        selectFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  return useContext(DataContext);
}