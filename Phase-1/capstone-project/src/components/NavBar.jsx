import React from "react";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="h-[10vh] w-full bg-neutral-500 px-20 fixed top-0 z-10 flex justify-between items-center shadow-lg shadow-neutral-500">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <input
        type="text"
        className="bg-black/30 text-white px-3 py-1 w-4/12 rounded-xl outline-0"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
      />
    </nav>
  );
};

export default NavBar;
