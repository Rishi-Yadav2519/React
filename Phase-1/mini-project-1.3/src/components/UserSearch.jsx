import React from "react";

// Getting the props passed
const UserSearch = ({query, setQuery}) => {
  return (
    <div className="flex flex-col w-full mx-auto items-end">
      <label htmlFor="userSearch" className="mr-1 ">Search for users</label>
      <input
        type="text"
        autoFocus
        name="userSearch"
        id="userSearch"
        // Setting value of query 
        value={query}
        // Onchange callback for setting query and searching user as we type 
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white outline-0 px-3 py-1 text-black w-[28%] rounded-2xl"
      />
    </div>
  );
};

export default UserSearch;
