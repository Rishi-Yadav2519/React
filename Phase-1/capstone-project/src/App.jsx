import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import StudentData from "./data/StudentData";

function App() {
  // declaring search query for filtering based on name search
  const [searchQuery, setSearchQuery] = useState("");
  // declaring grades value in boolean for filtering based on grades
  const [checkedGrades, setCheckedGrades] = useState({
    "A+": true,
    "A": true,
    "B+": true,
    "B": true,
    "C+": true,
    "C": true,
    "D": true,
  });
  // declaring student data in state so it can be updated when deleting
  const [students, setStudents] = useState(StudentData);

  return (
    <>
    {/* Passing the declared values and setter functions to their desired components */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="flex">
        <Sidebar checkedGrades={checkedGrades} setCheckedGrades={setCheckedGrades} />
        <Display students={students} setStudents={setStudents} searchQuery={searchQuery} checkedGrades={checkedGrades}/>
      </div>
    </>
  );
}

export default App;
