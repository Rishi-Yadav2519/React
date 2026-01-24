import React from 'react'

const ProgressBar = ({number}) => {

  // setting bgcolor based on number
  let bgColor;
  if (number <= 5) {
    // Deciding color for value less than or equal to 5
    bgColor = "bg-green-400"
  } else if (number > 5 && number <= 12) {
    // Deciding color for value greater than 6 and less than and equal to 13
    bgColor = "bg-yellow-400"
  } else if(number > 12 && number <= 20) {
    // Deciding color for value greater than 12 and less than and equal to 20
    bgColor = "bg-orange-400"
  } else {
    // Deciding color if number goes beyond 20
    bgColor = "bg-red-600"
  }

  return (
    <div className='w-full bg-black/20 px-2'>
      <p>Progress</p>
      {/* Giving width to div according to the number so that it act as progress bar */}
      <div className={`h-2.5 ${bgColor} max-w-full`} style={{width: `${(number/20) * 100}%`}}></div>
    </div>
  )
}

export default ProgressBar
