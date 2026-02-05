import "./App.css";
import NavBar from "./components/Header";
import Content from "./context/Content";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Content />
    </ThemeProvider>
  );
}
// API: -
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a45e1bfedbde4ea758c65cc68bdc6761

export default App;
