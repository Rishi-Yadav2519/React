import React from "react";

const Card = ({user}) => {

  return (
    <div
      className="card dark:bg-slate-800 dark:text-white/90 border w-[20vw] hover:scale-105 transition-all duration-700 rounded-4xl flex flex-col items-center px-5 py-2"
      key={user.id}
    >
      {user.image && (
        <img
          src={user.image}
          className="w-24 rounded-full dark:bg-white bg-neutral-200"
        />
      )}
      {user.firstName && (
        <p className="font-semibold self-start">
          {user.firstName} {user.lastName} {user.maidenName}
        </p>
      )}
      <div className="flex text-sm justify-between w-full mt-2 mb-2">
        {user.gender && (
          <p className="dark:text-black bg-neutral-300 rounded-4xl px-3 py-1">
            {user.gender}
          </p>
        )}
        {user.age && (
          <p className="dark:text-black bg-neutral-300 rounded-4xl px-3 py-1">
            {user.age}
          </p>
        )}
      </div>
      {user.email && (
        <a
          className="text-sm text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-400"
          href={`mailto:${user.email}`}
        >
          {user.email}
        </a>
      )}
      {user.phone && <p className="text-sm self-start mt-2">{user.phone}</p>}
      {user.company && (
        <div className="workDetails mt-2 self-start">
          <p className="text-neutral-800 dark:text-amber-50 font-semibold">
            {user.company.name}
          </p>
          <p className="text-sm">{user.company.title}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
