import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import StudentData from "./data/StudentData";
import StudentAddForm from "./components/StudentAddForm";

function App() {
  // declaring search query for filtering based on name search
  const [searchQuery, setSearchQuery] = useState("");
  // declaring grades value in boolean for filtering based on grades
  const [checkedGrades, setCheckedGrades] = useState({
    "A+": true,
    A: true,
    "B+": true,
    B: true,
    "C+": true,
    C: true,
    D: true,
  });
  // declaring student data in state so it can be updated when deleting and used for mapping data
  const [students, setStudents] = useState(StudentData);
  // declaring addStudentForm visibility to handle it using a button
  const [isFormVisible, setIsFormVisible] = useState(false);

  // declaring variables for form
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  
  // function to validate if all form fields are correct
  // Function to validate if all form fields meet the required criteria before allowing submission
  const isFormValid = () => {
    return (
      id > 0 &&                                    // Student ID must be a positive number
      name.length > 1 &&                           // Student name must be more than 1 character
      age > 5 &&                                   // Age must be greater than 5 years
      email.includes("@") &&                       // Email must contain @ symbol
      email.includes(".") &&                       // Email must contain . (dot) for domain
      grade.length > 0 &&                          // Grade must not be empty
      subject.length > 0                           // Subject must not be empty
    );
  };

  // Function to handle form submission when user clicks the Submit button
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();
    
    // Create an empty object to store the validated new student data
    let newStudent = {};

    // ===== VALIDATE STUDENT ID =====
    // Check if ID is a positive number greater than 0
    if (id > 0) {
      // Convert string input to integer and store in newStudent object
      let studentId = parseInt(id);
      newStudent.id = studentId;
      // Clear the ID input field for next use
      setId("")
    } else {
      // If validation fails, highlight the input field with red border
      document.getElementById("id").style.borderBottom = "red solid 2px";
    }

    // ===== VALIDATE STUDENT NAME =====
    // Check if name has more than 1 character (not empty or single character)
    if (name.length > 1) {
      // Store valid name in newStudent object
      newStudent.name = name;
      // Clear the name input field
      setName("")
    } else {
      // Highlight with red border if invalid
      document.getElementById("name").style.borderBottom = "red solid 2px";
    }

    // ===== VALIDATE STUDENT AGE =====
    // Check if age is a valid number greater than 5
    if (age > 5) {
      // Convert string input to integer and store in newStudent object
      let studentAge = parseInt(age);
      newStudent.age = studentAge;
      // Clear the age input field
      setAge("")
    } else {
      // Highlight with red border if invalid
      document.getElementById("age").style.borderBottom = "red solid 2px";
    }

    // ===== VALIDATE STUDENT EMAIL =====
    // Check if email contains both @ symbol and . (dot) for valid email format
    if (email.includes("@") && email.includes(".")) {
      // Store valid email in newStudent object
      newStudent.email = email;
      // Clear the email input field
      setEmail("")
    } else {
      // Highlight with red border if invalid
      document.getElementById("mail").style.borderBottom = "red solid 2px";
    }

    // ===== VALIDATE STUDENT GRADE =====
    // Check if grade is not empty
    if (grade.length > 0) {
      // Store valid grade in newStudent object
      newStudent.grade = grade;
      // Clear the grade input field
      setGrade("")
    } else {
      // Highlight with red border if invalid
      document.getElementById("grade").style.borderBottom = "red solid 2px";
    }

    // ===== VALIDATE AND PROCESS SUBJECTS =====
    // Check if subject input is not empty
    if (subject.length > 0) {
      // Split the comma-separated subject string into individual subjects
      // Example: "Math, Science, English" becomes ["Math", "Science", "English"]
      // Then use map() to convert each subject into an object with subjectID and subjectName
      // trim() removes extra spaces before and after each subject name
      let subjectsArray = subject.split(",").map((sub, index) => ({
        subjectID: index + 1,                      // Assign sequential IDs: 1, 2, 3, etc.
        subjectName: sub.trim()                    // Store trimmed subject name
      }));
      // Store the subjects array in newStudent object
      newStudent.subjects = subjectsArray;
      // Clear the subjects input field
      setSubject("")
    } else {
      // Highlight with red border if invalid
      document.getElementById("subjects").style.borderBottom = "red solid 2px";
    }

    // ===== ADD STUDENT TO LIST IF ALL VALIDATIONS PASSED =====
    // Check if all 6 required properties (id, name, age, email, grade, subjects) were successfully added to newStudent
    if (Object.keys(newStudent).length === 6) {
      // Add the new student to the existing students array using the spread operator
      // [...students] creates a copy of existing students, then adds newStudent at the end
      setStudents([...students, newStudent]);
      
      // Close/hide the form by setting isFormVisible to false
      setIsFormVisible(false);
      
      // Clear all form input fields to reset the form for next use
      setId("");
      setName("");
      setAge("");
      setGrade("");
      setEmail("");
      setSubject("");
    }
  };

  if (!isFormVisible) {
    return (
      <>
        {/* Passing the declared values and setter functions to their desired components */}
        <NavBar
          searchQuery={searchQuery}
          setIsFormVisible={setIsFormVisible}
          setSearchQuery={setSearchQuery}
        />
        <div className="flex">
          <Sidebar
            checkedGrades={checkedGrades}
            setCheckedGrades={setCheckedGrades}
          />
          <Display
            students={students}
            setStudents={setStudents}
            searchQuery={searchQuery}
            checkedGrades={checkedGrades}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <StudentAddForm
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          grade={grade}
          setGrade={setGrade}
          email={email}
          setEmail={setEmail}
          subject={subject}
          setSubject={setSubject}
          handleSubmit={handleSubmit}
          isFormValid={isFormValid()}
        />
      </>
    );
  }
}

export default App;
