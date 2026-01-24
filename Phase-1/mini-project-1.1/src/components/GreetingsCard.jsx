import React from "react";

// Accepting and destructring the props passed
const GreetingsCard = ({ name, age, hour }) => {

  // Declaring bgColor and Msg to use in JSX
  let msg;
  let bgColor;

  // Function to check age criteria
  const ageCheck = () => {
    if (age < 13) {
      return "Child";
    } else if (age < 18) {
      return "Teenager";
    } else {
      return "Adult";
    }
  };

  // Function to check time and return greeting and color based on time.
    if (hour >= 6 && hour < 12) {
      msg = "Good Morning"
      bgColor = "bg-blue-400"
    } else if(hour >= 12 && hour < 16) {
      msg = "Good Afternoon"
      bgColor = "bg-orange-400"
    } else if(hour >= 16 && hour < 20) {
      msg = "Good Evening"
      bgColor = "bg-purple-500"
    } else{
      msg = "Good Night"
      bgColor = "bg-black text-white"
    }

  return (
    <div className={`w-max h-max p-3 ${bgColor}  border border-white rounded-2xl hover:scale-110 transition-all duration-500 shadow-white shadow-lg`}>
      <div className="ageBadge mb-5 text-center bg">
        <p className="text-2xl font-semibold">You are {ageCheck()}</p></div>
      <div className="message">
        <p className="text-lg font-semibold">{msg} {name}</p>
      </div>
    </div>
  );
};

export default GreetingsCard;
