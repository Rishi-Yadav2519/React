import React from "react";
import useTheme from "../contexts/ThemeContext";

const Header = () => {
  const { darkModeToggle } = useTheme()

  return (
    <div className="h-[10vh] w-full shadow-lg shadow-neutral-500/20 flex justify-around items-center px-10 dark:bg-slate-900 dark:text-white dark:shadow-white/30 fixed top-0">
      <p className="font-semibold text-2xl">Theme Switcher</p>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="relative inline-block w-11 h-5">
        <input
          id="switch-component"
          type="checkbox"
          onChange={() => darkModeToggle()}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300 border border-slate-400"
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-400 shadow-sm transition-transform duration-300 peer-checked:translate-x-6  peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>
    </div>
  );
};

export default Header;
