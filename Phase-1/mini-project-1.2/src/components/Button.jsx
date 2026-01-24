import React from 'react'
// Taking multiple props to make it common button for all
const Button = ({expression, setNumber, solution, disabled}) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault()
          setNumber(solution)
        }}
        className='border px-2 w-24 py-1 rounded-xl hover:bg-black/40 hover:scale-110 transition-all'
        disabled={disabled}
      >
        {expression}
      </button>
    </div>
  )
}

export default Button
