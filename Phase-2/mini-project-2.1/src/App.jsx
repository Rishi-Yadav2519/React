import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // state holding the date
  const [currentTime, setCurrentTime] = useState(new Date())

  // useeffect for rerendering based on dependency of currentTime change
  useEffect(() => {
    // interval to refectch the date every 1 second
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
  
    // cleanup of the the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentTime])

  // taking all requird things out from the date fetched
  const hours24 = currentTime.getHours()
  const ampm = hours24 >= 12 ? "PM" : "AM"
  // converting format in string an dthen added padstart for better visualisation
  const hours = String(hours24 % 12 || 12).padStart(2, "0")
  const minutes = String(currentTime.getMinutes()).padStart(2, "0")
  const seconds = String(currentTime.getSeconds()).padStart(2, "0")
  const date = String(currentTime.toLocaleDateString("en-US", {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric"
  }))

  // bgcolor function based on the time of the day
  const bgColor = () => {
    if (hours24 < 6) {
      return "bg-blue-950"
    } else if(hours24 >= 6 && hours24 < 12) {
      return "bg-blue-400"
    } else if(hours24 >=12 && hours24 < 18) {
      return "bg-orange-500"
    } else if(hours24 >=18 && hours24 < 21) {
      return "bg-purple-950"
    } else{
      return "bg-blue-950"
    }
  }

  return (
    // passing bg color as template literal which change based on function
    <div className={`flex w-full h-screen justify-center items-center ${bgColor()}`}>
      <div className='backdrop-blur-3xl bg-black font-semibold rounded-2xl w-max px-5 py-4 flex flex-col items-center gap-5'>
        <div className="timeContainer flex">
          <div className="w-15 text-center hour orbitron-font border px-2 py-1 text-xl ">{hours} </div>
          <div className="w-15 text-center minute orbitron-font border px-2 py-1 text-xl ">{minutes} </div>
          <div className="w-15 text-center second orbitron-font border px-2 py-1 text-xl ">{seconds} </div>
          <span className='w-15 text-center text-md ampm orbitron-font px-2 py-1'>{ampm} </span>
        </div>
        <div className="dateContainer text-xl">
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default App
