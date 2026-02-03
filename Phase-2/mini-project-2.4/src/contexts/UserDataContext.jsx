import { createContext, useContext, useEffect, useState } from "react";

// creating a userDataContext for passing data through context
export const UserDataContext = createContext({
  data: [],
  fetchData: () => {},
});

// Provider function which return the provider with value passing to it's children
export function UserDataProvider({ children }) {
  const [data, setData] = useState([]);

  // function for fetching data 
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users?limit=500");
      const data = await res.json();
      setData(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Data fetched sucessfully");
    }
  };

  // fetching data on initial load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={{ data }}>
      {children}
    </UserDataContext.Provider>
  );
}

// exporting userdata with context for using data
export default function useUserData() {
  return useContext(UserDataContext);
}
