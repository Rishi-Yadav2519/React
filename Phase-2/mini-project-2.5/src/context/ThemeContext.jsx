import { createContext, useContext, useLayoutEffect, useState } from "react";

// Also practiced context API for better understanding
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useLayoutEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export default function useTheme() {
    return useContext(ThemeContext)
}