import React from "react";
import useData from "../context/DataContext";

const Searchbar = () => {
  // Accessing search term and data fetching functions from the context
  const { searchTerm, setSearchTerm, fetchData } = useData();

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // Trigger data fetching functions when the user presses the Enter key in the search input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchData();
          }
        }}
        type="text"
        className="bg-neutral-200 w-full px-3 py-1 rounded-l-2xl dark:bg-slate-600 outline-0 md:text-xl 2xl:rounded-l-3xl"
      />
      <svg
      // Trigger data fetching functions when the user clicks on the search icon
        onClick={() => {
          fetchData();
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 bg-neutral-200 dark:bg-slate-600 rounded-r-2xl px-2 active:bg-white active:border-neutral-200 active:border-2 cursor-pointer md:size-9 2xl:size-10 2xl:rounded-r-3xl"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </>
  );
};

export default Searchbar;
