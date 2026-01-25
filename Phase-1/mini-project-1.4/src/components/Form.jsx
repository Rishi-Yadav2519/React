import React from "react";
import Button from "./Button";

// Form taking all declared variable as props
const Form = ({
  username,
  age,
  email,
  message,
  setUsername,
  setAge,
  setGender,
  setEmail,
  setMessage,
  setEditable,
  setSubmit,
}) => {
  // Validation function to check if all fields are filled
  const isFormValid = () => {
    return username.trim() !== "" && 
           age !== "" && 
           email.trim() !== "" && 
           message.trim() !== "";
  };

  return (
    // Checked for the conditions using the default conditions provide by input HTML tag attributes such as required and type
    <div className="w-1/2">
      <form className="w-full bg-black/20 p-5 rounded-2xl flex flex-col gap-4">
        <div className="inputName flex flex-col">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Rishi Kumar Yadav"
            className="bg-white/30 outline-0 px-3 py-1 rounded-xl"
          />
        </div>
        <div className="ageGender flex justify-between">
          <div className="inputAge flex flex-col">
            <label htmlFor="age">Enter Your Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              name="age"
              required
              placeholder="25"
              className="bg-white/30 outline-0 px-3 py-1 rounded-xl"
            />
          </div>
          <div className="inputAge">
            <fieldset className="flex gap-3">
              <legend>Select Gender</legend>
              <input
                type="radio"
                name="gender"
                id="male"
                required
                value={"Male"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value={"Female"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                value={"Other"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="other">Other</label>
            </fieldset>
          </div>
        </div>
        {/* Checking email though input type email */}
        <div className="email flex flex-col">
          <label htmlFor="mail">Enter Your Email Id</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="mail"
            id="mail"
            placeholder="yourmail@email.com"
            className="bg-white/30 outline-0 px-3 py-1 rounded-xl"
            required
          />
        </div>
        {/* textarea for getting message */}
        <div className="message flex flex-col">
          <label htmlFor="message">Enter Message</label>
          <textarea
            required
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            minLength={10}
            placeholder="Enter your message"
            className=" bg-white/30 outline-0 px-3 py-1 rounded-xl"
          ></textarea>
        </div>
        {/* buttons which pass onclick function as prop named event which changes value of preview and submit to a boolean*/}
        <div className="btnContainer flex gap-10 justify-center">
          <Button
            text={"Preview"}
            event={(e) => {
              e.preventDefault();
              setEditable(false);
            }}
            value={"button"}
          />
          {/* Submit button works a a conditional rendering which check for all the required fields are filled or not  */}
          <Button
            text={"Submit"}
            event={(e) => {
              e.preventDefault();
              if (isFormValid()) {
                setSubmit(true);
              } else {
                alert("Please fill in all required fields before submitting!");
              }
            }}
            value={"submit"}
            disabled={!isFormValid()}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
