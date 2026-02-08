import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    // Wrapping the entire app with both DataProvider and ThemeProvider to ensure that all components have access to the necessary context values for data and theme management.
    <DataProvider>
      <ThemeProvider>
        <NavBar />
        <Content />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
