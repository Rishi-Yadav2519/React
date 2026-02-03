import { useContext, createContext, useState, useLayoutEffect } from "react";

// Creating a context for theme changing
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// exporting themeProvider with value
export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");

  // toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light")
  }

  // useLayoutEffect for changing the html tag class light or dark for tailwing dark mode
  useLayoutEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  // returning children wrapped in Provider with value to pass
  return (
    <ThemeContext.Provider value={{toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

// exporting useTheme with context for using in any component
export default function useTheme() {
    return useContext(ThemeContext);
}