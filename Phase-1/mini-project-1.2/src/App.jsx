import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import NumberDisplay from "./components/NumberDisplay";

function App() {
  // Number declared at top-most level to pass as prop to all components
  const [number, setNumber] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="wrapper bg-white/20 px-5 py-3 rounded-2xl h-[30vh] w-[50%] flex flex-col justify-around">
        <div className="text-center text-2xl">
          {/* Number display component */}
          <NumberDisplay number={number} />
        </div>
        {/* All buttons coming from a single button component */}
        <div className="btnContainer flex justify-around">      
          <Button
            expression={"Increment"}
            setNumber={setNumber}
            solution={(prev) => prev + 1}
          />
          <Button
            expression={"Decrement"}
            setNumber={setNumber}
            solution={(prev) => prev - 1}
            // Disabling button after reaching 0 so that value don't go in negative
            disabled={number <= 0 ? true : false}
          />
          <Button
            expression={"+ 5"}
            setNumber={setNumber}
            solution={(prev) => prev + 5}
          />
          <Button
            expression={"- 5"}
            setNumber={setNumber}
            solution={(prev) => prev - 5}
            // Disabling button after reaching 0 so that value don't go in negative
            disabled={number < 5 ? true : false}
          />
          <Button expression={"Reset"} setNumber={setNumber} solution={0} />
        </div>
        {/* Progress bar from component */}
        <ProgressBar number={number} />
      </div>
    </div>
  );
}

export default App;
