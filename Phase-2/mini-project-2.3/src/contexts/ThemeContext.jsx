import { useContext, createContext, useState, useLayoutEffect } from "react";

// Create context with default values
export const ThemeContext = createContext({
    theme: "light",
    darkModeToggle: () => {}
})

// ThemeProvider component that manages theme state internally
export function ThemeProvider({ children }) {
    // Theme state lives inside the provider (encapsulation)
    const [theme, setTheme] = useState("light");

    // Toggle function
    const darkModeToggle = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    // useLayoutEffect runs synchronously before paint (no flash)
    // Applies theme class to HTML element
    useLayoutEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    // Provide both theme value and toggle function
    return (
        <ThemeContext.Provider value={{ theme, darkModeToggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook to use theme context in any component
export default function useTheme() {
    return useContext(ThemeContext);
}