import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Submit from "./components/Submit";

function App() {
  // declaring all required variables and their setters
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [editable, setEditable] = useState(true);
  const [submit, setSubmit] = useState(false);
  
  // conditional rendering if submit is true which is false by default then render the submit component 
  if (submit) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Submit
          age={age}
          email={email}
          gender={gender}
          message={message}
          username={userName}
        />
      </div>
    );
    // conditional rendering if not editable which is true  by default then render the preview component 
  } else if (!editable) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Preview
          username={userName}
          age={age}
          email={email}
          message={message}
          gender={gender}
          setEditable={setEditable}
          />
      </div>
    );
    // conditional rendering else render the form 
  } else {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Form
          username={userName}
          age={age}
          email={email}
          message={message}
          setUsername={setUserName}
          setAge={setAge}
          setGender={setGender}
          setEmail={setEmail}
          setMessage={setMessage}
          setEditable={setEditable}
          setSubmit={setSubmit}
          submit={submit}
        />
      </div>
    );
  }
}

export default App;
