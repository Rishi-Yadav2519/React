import React from "react";

const NumberDisplay = ({ number }) => {
    // if else condition for checking the number if crosses 20 than showing warning
  if (number > 20) {
    return (
      <>
        <p className="text-red-600">Warning: Max Number is 20</p>
        <div>{number}</div>
      </>
    );
  } else {
    return <div>{number}</div>;
  }
};

export default NumberDisplay;
