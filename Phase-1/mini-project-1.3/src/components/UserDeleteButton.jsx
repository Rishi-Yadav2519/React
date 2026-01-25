import React from "react";
// Accepting the passed props
const UserDeleteButton = ({removeUser, userId}) => {
  return (
    <button
      className="bg-white hover:cursor-pointer text-red-600 border-2 w-max px-2 rounded-3xl self-center mt-2"
    // Calling the remove user function passing the UserId to it for targetting the specific user
      onClick={() => removeUser(userId)}
    >
      Delete User
    </button>
  );
};

export default UserDeleteButton;
