import { createContext, useContext, useEffect, useState } from "react";
import Data from "../data/Data";
import ForecastData from "../data/ForeCastData";

export const DataContext = createContext({
  data: {},
  fetchData: () => {},
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  const [forecastData, setForecastData] = useState(ForecastData);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  // const fetchData = async () => {
  //     try {
  //         // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=a45e1bfedbde4ea758c65cc68bdc6761&units=metric`);
  //         // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //         const data = await res.json();
  //         setData(data);
  //     } catch (error) {
  //         console.log(error);
  //     } finally{
  //         console.log("data fetching complete");
  //         setLoading(false);
  //         console.log(data);
  //     }
  // }

  return (
    <DataContext.Provider value={{ data, forecastData, searchTerm, setSearchTerm, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  return useContext(DataContext);
}
