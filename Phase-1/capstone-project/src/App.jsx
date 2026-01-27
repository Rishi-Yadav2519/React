import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import StudentData from "./data/StudentData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="flex">
        <Sidebar />
        <Display StudentData={StudentData} searchQuery={searchQuery}/>
      </div>
    </>
  );
}

export default App;
