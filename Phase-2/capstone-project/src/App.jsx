import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
