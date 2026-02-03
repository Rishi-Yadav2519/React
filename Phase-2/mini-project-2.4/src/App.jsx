import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserDataProvider } from "./contexts/UserDataContext";

function App() {
  // searchQuery for filtering in data
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // wrapping the main content with ThemeProvider and UserDataProvider for passing data through context
    <UserDataProvider>
      <ThemeProvider>
        {/* passing some data manually also for testing purpose */}
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Content searchQuery={searchQuery} />
      </ThemeProvider>
    </UserDataProvider>
  );
}

export default App;
