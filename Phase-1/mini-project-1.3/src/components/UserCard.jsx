import React from "react";
import UserDeleteButton from "./UserDeleteButton";

// Taking user object as prop
const UserCard = ({ user, removeUser }) => {
  return (
    <div
      className="card p-2 min-w-[25%] bg-neutral-700 flex flex-col hover:scale-110 transition-all rounded-2xl shadow-md shadow-white"
    >
      <div className="dataContainer bg-neutral-500 text-black rounded-lg p-2">
        <h1 className="text-2xl font-semibold mb-3 text-white">
          {user.username}
        </h1>
        <div className="secondaryContainer flex justify-between mb-1">
          <p className="border px-1 rounded-lg bg-neutral-300 text-sm">
            {user.age}
          </p>
          <p className="border px-1 rounded-lg bg-neutral-300 text-sm">
            {user.job}
          </p>
        </div>
        <a
          href={`mailto:${user.email}`}
          className="text-white/70 underline mb-1"
        >
          {user.email}
        </a>
        <p className="text-white">{user.city}</p>
      </div>
      {/* Inserting delete button to each card and passing function to remove user taken from app.jsx and user id to userdelete button */}
      <UserDeleteButton removeUser={removeUser} userId={user.id}/>
    </div>
  );
};

export default UserCard;
