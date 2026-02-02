import { useContext, createContext } from "react";

// created a context with a function which changes the theme
export const ThemeContext = createContext({
    // The function is blank we're updating it when we declare all other required thing on app.jsx
    darkModeToggle : () => {
    }
})

// exporting usetheme with themeContext from a custom hook for using the context on any page
export default function useTheme() {
    return useContext(ThemeContext)
}