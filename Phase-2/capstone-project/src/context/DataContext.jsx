import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const DataContext = createContext({
  data: {},
  fetchData: () => {},
  fetchForecastData: () => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // function to fetch data based on search term
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=a45e1bfedbde4ea758c65cc68bdc6761&units=metric`,
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("data fetching complete");
      setLoading(false);
      console.log(data);
    }
  };

  const fetchForecastData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=a45e1bfedbde4ea758c65cc68bdc6761&units=metric`,
      );
      const data = await res.json();
      setForecastData(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("forecast data fetching complete");
      setLoading(false);
      console.log(forecastData);
    }
  };

  useEffect(() => {
    fetchData();
    fetchForecastData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        forecastData,
        searchTerm,
        setSearchTerm,
        loading,
        fetchData,
        fetchForecastData,
      }}
    >
      {" "}
      {/* */}
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  return useContext(DataContext);
}
