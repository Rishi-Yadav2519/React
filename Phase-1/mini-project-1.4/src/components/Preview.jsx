import React from "react";
import Button from "./Button";

// Preview component which is changeable as there is a button below to go to form
const Preview = ({ username, age, email, message, gender, setEditable }) => {
  return (
    <div className="card border p-4 rounded-3xl w-[30vw]">
      {username && <h2 className="text-3xl font-semibold mb-4">{username}</h2>}
      <div className="capsuleContainer flex gap-5 mb-4">
        {age && (
          <span className="capsule bg-white/20 px-3 py-1 rounded-xl">
            {age}
          </span>
        )}
        {gender && (
          <span className="capsule bg-white/20 px-3 py-1 rounded-xl">
            {gender}
          </span>
        )}
      </div>
      {email && (
        <div className="mailContainer hover:scale-110 hover:translate-x-5 transition-all">
          <a className="text-blue-400" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      )}
      {message && (
        <p className="mt-4 bg-white text-black px-2 py-1 w-full h-40 rounded-2xl">
          {message}
        </p>
      )}
      <div className="buttonWrapper w-full flex justify-center mt-4">
        <Button
          text={"Edit"}
          event={(e) => {
            e.preventDefault();
            setEditable(true)
          }}
        />
      </div>
    </div>
  );
};

export default Preview;
