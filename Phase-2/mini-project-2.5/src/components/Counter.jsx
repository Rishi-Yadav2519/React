import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Counter = () => {
  // using the custom hook with the key number and initial value 0
    const [number, setNumber] = useLocalStorage("number", 0)
    
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center h-screen dark:bg-slate-800">
      <p className="font-bold text-3xl dark:text-white">{number}</p>
      <div className="buttonWrapper flex gap-5">
        {/* simple increment function on click */}
        <button
          onClick={() => setNumber((prev) => prev + 1)}
          className="px-3 bg-neutral-200 py-1 rounded-2xl active:bg-white border border-neutral-400 dark:bg-slate-900 dark:text-white dark:active:bg-slate-700"
          >
          Increment
        </button>
          {/* simple decrement function on click */}
        <button
          onClick={() => setNumber((prev) => prev - 1)}
          className="px-3 bg-neutral-200 py-1 rounded-2xl active:bg-white border border-neutral-400 dark:bg-slate-900 dark:text-white dark:active:bg-slate-700"
          >
          Decrement
        </button>
          {/* simple reset function on click */}
        <button
          onClick={() => setNumber(0)}
          className="px-3 bg-neutral-200 py-1 rounded-2xl active:bg-white border border-neutral-400 dark:bg-slate-900 dark:text-white dark:active:bg-slate-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
