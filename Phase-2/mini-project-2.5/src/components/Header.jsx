import React from "react";
import useTheme from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <nav className="h-[10vh] items-center flex justify-between px-20 shadow-md w-full dark:bg-slate-900 dark:shadow-white/20 fixed z-10 bg-white">
        <div className="heading text-2xl dark:text-white font-semibold">
            Custom Hook
        </div>
      <div className="relative inline-block w-11 h-5 ">
        <input
          id="switch-component"
          type="checkbox"
          onChange={toggleTheme}
          className="peer appearance-none w-11 h-5 bg-slate-200 rounded-full checked:bg-slate-700 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-400 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
    </nav>
  );
};

export default Header;
