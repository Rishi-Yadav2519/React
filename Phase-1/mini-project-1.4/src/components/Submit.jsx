import React from "react";

// submit component which shows the final output after clicking on submit which can't be changed
const Submit = ({ username, age, gender, email, message }) => {
  return (
    <div className="card border p-4 rounded-3xl w-[30vw]">
      <h2 className="text-3xl font-semibold mb-4">{username}</h2>
      <div className="capsuleContainer flex gap-5 mb-4">
        <span className="capsule bg-white/20 px-3 py-1 rounded-xl">{age}</span>
        <span className="capsule bg-white/20 px-3 py-1 rounded-xl">
          {gender}
        </span>
      </div>
      <div className="mailContainer hover:scale-110 hover:translate-x-5 transition-all">
        <a className="text-blue-400" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <p className="mt-4 bg-white text-black px-2 py-1 w-full h-40 rounded-2xl">
        {message}
      </p>
    </div>
  )
}

export default Submit;
