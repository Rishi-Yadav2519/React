import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [location, setLocation] = useState(() => {
        try {
            const storedLocation = localStorage.getItem(key)
            return storedLocation ? JSON.parse(storedLocation) : initialValue
        } catch (error) {
            console.log(error);
            return initialValue
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(location))
        } catch (error) {
            console.log(error);
        }
    }, [key, location])
    return [location, setLocation]
}    
