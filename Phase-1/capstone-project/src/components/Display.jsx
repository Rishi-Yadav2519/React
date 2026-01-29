import React, { useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";

// taking all required params through array destructuring
const Display = ({ students, setStudents, searchQuery, checkedGrades }) => {
  // creating a variable for list view either it should be false or true
  const [list, setList] = useState(false);

  // function for deleting student where we are creating a new array by filtering out the target student and setting it in student variable
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // function for filtering student based on serach and grade
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      checkedGrades[student.grade],
  );

  // Mapping function through if else condition for list view and grid view
  if (!list) {
    return (
      <div className="w-[90vw] min-h-[90vh] bg-white ml-[10vw] mt-[10vh] px-20 py-5">
        <div className="container text-black w-full flex justify-end">
          {/* toggle button for card or list view */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={list}
              onChange={() => setList(!list)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Toggle View
            </span>
          </label>
        </div>
        <CardView
          filteredStudents={filteredStudents}
          deleteStudent={deleteStudent}
        />
      </div>
    );
  } else {
    return (
      <div className="w-[90vw] bg-white ml-[10vw] mt-[10vh] px-20 py-5">
        <div className="container text-black w-full flex justify-end">
          {/* toggle button for card or list view */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={list}
              onChange={() => setList(!list)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Toggle View
            </span>
          </label>
        </div>
        <ListView
          filteredStudents={filteredStudents}
          deleteStudent={deleteStudent}
        />
      </div>
    );
  }
};

export default Display;
