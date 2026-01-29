import React from "react";

// taking all required params through array destructuring
const CardView = ({ filteredStudents, deleteStudent }) => {
  return (
    <div className="wrapper p-5 flex flex-wrap gap-5">
      {/* Mapping the students in card view based on their unique id using a ternary operator where when there is no user it return a p tag with no data found */}
      {filteredStudents.length > 0 ? (
        filteredStudents.map((data) => (
          <div
            className="card text-black w-72 rounded-2xl px-3 py-5 bg-black/15 flex flex-col "
            key={data.id}
          >
            <div className="w-10 flex self-center justify-center items-center h-10 bg-red-600 text-white rounded-full mb-3">
              {data.grade}
            </div>
            <div className="nameAgeContainer flex items-center mb-2">
              <h1 className="text-2xl font-semibold">{data.name}</h1>
              <span className="font-semibold bg-blue-500 ml-auto text-white px-2 py-1 rounded-full">
                {data.age}
              </span>
            </div>
            {/* student email as clickable link */}
            <a href={`mailto:${data.email}`} className="text-black/70">
              {data.email}
            </a>
            <div className="subjectContainer mt-3">
              <ul>
                {/* Mapping subject in li */}
                {data.subjects.map((sub) => (
                  <li
                    key={sub.subjectID}
                    className="ml-10 text-black list-disc"
                  >
                    {sub.subjectName}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => deleteStudent(data.id)}
              className="mt-5 bg-red-600 w-max self-center text-white border border-white transition-all px-2 py-1 font-semibold rounded-2xl active:bg-white active:text-red-600 active:border-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-black text-xl font-semibold">No students found</p>
      )}
    </div>
  );
};

export default CardView;
