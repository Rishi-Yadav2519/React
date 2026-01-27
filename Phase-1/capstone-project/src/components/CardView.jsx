import React from "react";

const CardView = ({ StudentData, searchQuery }) => {
  
  const filteredStudents = StudentData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="wrapper p-5 flex flex-wrap gap-5">
      
      {filteredStudents.length > 0 ? (
        StudentData.map((data) => (
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
          <a href={`mailto:${data.email}`} className="text-black/70">
            {data.email}
          </a>
          <div className="subjectContainer mt-3">
            <ul>
              {data.subjects.map((sub) => (
                <li key={sub.subjectID} className="ml-10 text-black list-disc">
                  {sub.subjectName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))
      ) : (
          <p className="text-white text-xl">No users found</p>
        )}

{/* 
      {StudentData.map((data) => (
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
          <a href={`mailto:${data.email}`} className="text-black/70">
            {data.email}
          </a>
          <div className="subjectContainer mt-3">
            <ul>
              {data.subjects.map((sub) => (
                <li key={sub.subjectID} className="ml-10 text-black list-disc">
                  {sub.subjectName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default CardView;
