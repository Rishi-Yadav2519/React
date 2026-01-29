import React from "react";

// taking all required params through array destructuring
const ListView = ({ filteredStudents, deleteStudent }) => {
  return (
    <div className="wrapper p-5 flex flex-wrap gap-5">
      {/* filtering student with ternary operator if there is stuednts more than 0 then return data in tabular format else return a no student found message */}
      {filteredStudents.length > 0 ? (
        <table className="text-black">
          <thead>
            <tr className="border text-xl">
              <th className="px-5 py-2">Student ID</th>
              <th className="px-5">Student Name</th>
              <th className="px-5">Age</th>
              <th className="px-5">Email</th>
              <th className="px-5">Grade</th>
              <th className="px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* mapping the students in rows */}
            {filteredStudents.map((data) => (
              <tr key={data.id} className="border">
                <td className="px-5 py-2">{data.id}</td>
                <td className="px-5">{data.name}</td>
                <td className="px-5">{data.age}</td>
                <td className="px-5">
                  <a href={`mailto:${data.email}`} className="text-blue-500">
                    {data.email}
                  </a>
                </td>
                <td className="px-5">{data.grade}</td>
                <td className="px-5">
                  {/* button to delete student */}
                  <button
                    onClick={() => deleteStudent(data.id)}
                    className="font-semibold bg-red-600 w-max self-center text-white border border-white transition-all px-2 py-1 rounded-2xl active:bg-white active:text-red-600 active:border-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-black text-xl font-semibold">No students found</p>
      )}
    </div>
  );
};

export default ListView;
