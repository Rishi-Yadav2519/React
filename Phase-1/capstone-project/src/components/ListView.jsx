import React from "react";

const ListView = ({StudentData}) => {
  return (
    <div className="wrapper p-5 flex flex-wrap gap-5 h-[83vh]">
      <table className="text-black">
        <thead>
          <tr className="border text-xl">
            <th className="px-5 py-2">Student ID</th>
            <th className="px-5">Student Name</th>
            <th className="px-5">Age</th>
            <th className="px-5">Email</th>
            <th className="px-5">Grade</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((data) => (
            <tr key={data.id} className="border">
              <td className="px-5">{data.id}</td>
              <td className="px-5">{data.name}</td>
              <td className="px-5">{data.age}</td>
              <td className="px-5">
                <a href={`mailto:${data.email}`} className="text-blue-500">
                  {data.email}
                </a>
              </td>
              <td className="px-5">{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
