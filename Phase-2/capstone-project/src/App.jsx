import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <NavBar />
        <Content />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
