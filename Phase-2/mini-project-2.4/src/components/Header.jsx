import React from "react";
import useTheme from "../contexts/ThemeContext";

const Header = ({ searchQuery, setSearchQuery }) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className=" flex bg-white items-center dark:bg-slate-900 dark:text-white justify-around h-[10vh] w-full z-10 fixed shadow-lg shadow-slate-500/30">
      <p className="text-2xl font-semibold">useMemo Hook</p>
      <div className="searchBar w-2/6 flex items-center relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
          className="bg-neutral-300 dark:bg-slate-700 w-full rounded-l-2xl px-3 outline-0 py-1"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 rounded-r-2xl px-2 active:bg-white active:border active:border-neutral-300 cursor-pointer bg-neutral-300 dark:bg-slate-700 hover:bg-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="relative inline-block w-11 h-5">
        <input
          id="switch-component"
          type="checkbox"
          onChange={toggleTheme}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300 border border-slate-400"
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-400 shadow-sm transition-transform duration-300 peer-checked:translate-x-6  peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
    </nav>
  );
};

export default Header;
