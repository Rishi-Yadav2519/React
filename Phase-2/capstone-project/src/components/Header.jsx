import React, { useState } from "react";
import useTheme from "../context/ThemeContext";
import FavoritesList from "./FavoritesList";
import Searchbar from "./Searchbar";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  function sideBarToggle() {
    if (isSidebarOpen === true) {
      return "flex";
    } else {
      return "hidden";
    }
  }

  return (
    <>
      <nav className="flex h-[10vh] bg-white fixed z-100 w-full justify-between items-center shadow-lg px-5 dark:bg-slate-900 dark:text-white dark:shadow-slate-600/70 2xl:px-10">
        <p className="heading text-2xl font-semibold sm:text-lg md:text-2xl 2xl:text-3xl">
          Weather APP
        </p>
        <div className="searchBar w-[30vw] hidden lg:flex">
          <Searchbar />
        </div>
        <div className="relative hidden w-11 h-5 lg:flex 2xl:h-8 2xl:w-16">
          <input
            id="switch-component"
            type="checkbox"
            onChange={toggleTheme}
            className="peer appearance-none w-11 h-5 bg-slate-200 rounded-full checked:bg-slate-700 cursor-pointer transition-colors duration-300 2xl:h-8  2xl:w-16"
          />
          <label
            htmlFor="switch-component"
            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-400 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer 2xl:h-8 2xl:w-8 "
          ></label>
        </div>
        <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-8 md:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
      <div
        className={`sidebar dark:border-l dark:border-l-white/40 w-[70vw] fixed bg-white dark:bg-slate-900 h-screen dark:text-white z-100 right-0 ${sideBarToggle()} flex-col shadow-lg px-5 pb-5`}
      >
        <div className="cancelBtn h-[10vh] flex justify-end w-full items-center">
          <button className="h-[10vh]" onClick={handleSidebarClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-8 md:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-5 my-5 md:gap-8">
          <div className="toggleSwitchWrapper w-full flex justify-end gap-5 items-center">
            <span className="md:text-xl">Theme</span>
            <div className="relative w-11 h-5">
              <input
                id="switch-component"
                type="checkbox"
                onChange={() => toggleTheme()}
                className="peer appearance-none w-11 h-5 bg-slate-200 rounded-full checked:bg-slate-700 cursor-pointer transition-colors duration-300 dark:bg-slate-600"
              />
              <label
                htmlFor="switch-component"
                className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-400 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
              ></label>
            </div>
          </div>
          <div className="search w-full">
            <div className="searchBar flex">
              <Searchbar />
            </div>
          </div>
        </div>
          <div className="FavListWrapper w-full h-full">
            <FavoritesList />
          </div>
      </div>
    </>
  );
};

export default NavBar;
