import React, { useMemo } from "react";
import Card from "./Card";
import useUserData from "../contexts/UserDataContext";

const Content = ({searchQuery}) => {
  // destructuring data get from context
  const { data } = useUserData();

  // filtered users with useMemo for optimization
  const filteredUsers = useMemo(() => {
    console.log("filtering...");
    return data.filter((user) => (
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [searchQuery, data]); //both are dependency

  return (
    <div className="w-full min-h-screen pt-[10vh] dark:bg-slate-700">
      <div className="wrapper w-[90vw] mx-auto p-5 flex flex-wrap gap-5">
        {filteredUsers.length>0 ? (filteredUsers.map((user) => (
          <Card user={user} key={user.id} />
        ))) : <p className="dark:text-white">No User Found</p>}
      </div>
      <div className="bg-slate-900 fixed z-10 bottom-5 text-white rounded-full flex items-center justify-center font-semibold w-10 h-10 right-5 dark:bg-white dark:text-slate-900">
        {filteredUsers.length}
      </div>
    </div>
  );
};

export default Content;
