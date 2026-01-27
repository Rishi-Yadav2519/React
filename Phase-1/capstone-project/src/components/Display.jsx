import React, { useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";

const Display = ({ StudentData, searchQuery }) => {
  const [list, setList] = useState(false);

  if (!list) {
    return (
      <div className="w-[90vw] bg-white ml-[10vw] mt-[10vh] px-20 py-5">
        <div className="container text-black w-full flex justify-end">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={list} onChange={() => (setList(!list))} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Toggle View
            </span>
          </label>
        </div>
        <CardView StudentData={StudentData} searchQuery={searchQuery} />
      </div>
    );
  } else {
    return (
      <div className="w-[90vw] bg-white ml-[10vw] mt-[10vh] px-20 py-5">
        <div className="container text-black w-full flex justify-end">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={list}  onChange={() => (setList(!list))} className="sr-only peer" /> 
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Toggle View
            </span>
          </label>
        </div>
        <ListView StudentData={StudentData} searchQuery={searchQuery} />
      </div>
    );
  }
};

export default Display;
