import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  // declared a theme and setter with a default value so that we can toogle it
  const [theme, setTheme] = useState("light");

  // updated toggle function we made in the context
  function darkModeToggle () {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // useEffect for initial rendering which remove the class and add new class to HTML tag as we are using tailwind CSS, theme is the dependency of the effect.
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    // Theme provider we created in context file passing values require for toggling mode
    <ThemeContext.Provider value={{ darkModeToggle }}>
      <Header />
      <Content />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
