import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  // All theme logic now lives inside ThemeProvider (ThemeContext.js)
  // App.jsx is now clean and focused only on layout
  
  return (
    // ThemeProvider manages theme state internally
    // No need to pass value prop - it's handled inside ThemeProvider
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
