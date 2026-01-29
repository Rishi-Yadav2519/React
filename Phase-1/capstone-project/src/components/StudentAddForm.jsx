import React from "react";

// taking all the params and using destructuring method
const StudentAddForm = ({
  id,
  setId,
  name,
  setName,
  age,
  setAge,
  grade,
  setGrade,
  email,
  setEmail,
  subject,
  setSubject,
  handleSubmit,
  isFormValid
}) => {
  return (
    // A form for creating new student with value and setter functions and a button with handleSubmit function
    <div
      className="h-screen w-full backdrop-blur-xs fixed top-0 z-100"
      id="studentForm"
    >
      <form className="w-3/6 mx-auto p-5 my-5 bg-white/20 rounded-2xl mt-10">
        <h1 className="text-center text-2xl font-semibold">Add New Student</h1>
        <div className="flex flex-col w-[30%] mb-5">
          <label htmlFor="id" className="px-2">
            Student Id
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => (
                setId(e.target.value)
            )}
            required
            name="studentId"
            className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
            placeholder="ID"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => (
                setName(e.target.value)
            )}
            required
            name="studentName"
            className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
            placeholder="Enter Student Name"
          />
        </div>
        <div className="wrapper flex justify-between">
          <div className="flex flex-col w-[30%] mb-5">
            <label htmlFor="age">Student Age</label>
            <input
              type="number"
              id="age"
              value={age}
            onChange={(e) => (
                setAge(e.target.value)
            )}
              required
              name="studentAge"
              className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
              placeholder="Age"
            />
          </div>
          <div className="flex flex-col w-[30%] mb-5">
            <label htmlFor="grade">Student Grade</label>
            <input
              type="text"
              id="grade"
              required
              value={grade}
            onChange={(e) => (
                setGrade(e.target.value)
            )}
              name="studentGrade"
              className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
              placeholder="Grades"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="mail">Student Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => (
                setEmail(e.target.value)
            )}
            id="mail"
            name="studentEmail"
            className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
            placeholder="Enter Student Email Address"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="subjects">Subjects (Seperate by " , ")</label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => (
                setSubject(e.target.value)
            )}
            id="subjects"
            name="subjects"
            className="bg-white/60 rounded-2xl px-3 py-1 outline-0 text-black"
            placeholder="Enter Subjects Seperated by Comma"
          />
        </div>
        <div className="wrapper w-full justify-center flex">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
           className="bg-blue-400 text-black px-3 py-2 rounded-2xl active:text-white active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAddForm;
