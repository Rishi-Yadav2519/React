import { createContext, useContext, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(() => (theme === 'light' ? 'dark' : 'light'))
    }

    useLayoutEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme() {
    return useContext(ThemeContext)
}