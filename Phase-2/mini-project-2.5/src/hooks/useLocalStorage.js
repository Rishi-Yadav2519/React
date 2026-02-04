import { useEffect, useState } from "react";

// exporting a custom hook which take a key and a initial value
export default function useLocalStorage(key, initialValue) {
// useState for managing variable which can be updated
  const [value, setValue] = useState(() => {
    // try catch method for error handling
    try {
        // trying to get any stored item in local storage
        const storedValue = localStorage.getItem(key)
        // if any stored item is present then use it else take  initial value cause we made a counter
        return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
        // console log's the error if anything unexpected happened and returning the initial value
        console.log(error);
        return initialValue
    }
  })

// useEffct with dependency, key and value cause in our app value is going to change, to set items at local storage
  useEffect(() => {
    // tryCatch for error handling
    try {
        // trying to add the value to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        // console log's the er ror if something unexpected happend
        console.log(error);
    }
  }, [key, value])

// returning value and setvalue function so that the value can be accessed and setted from any component
  return[value, setValue]
}
