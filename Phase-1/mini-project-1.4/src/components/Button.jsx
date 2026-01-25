import React from 'react'

// simple button which take onclick function and the text to display as props
const Button = ({text, event, value, disabled = false}) => {
  return (
    <button 
      className={`border px-3 py-1 rounded-2xl transition-all ${
        disabled 
          ? 'bg-gray-500/50 text-gray-300 cursor-not-allowed' 
          : 'active:bg-white active:text-black hover:bg-white/30 hover:scale-110'
      }`}
      onClick={event}
      type={value}
      disabled={disabled}
    >
        {text}
    </button>
  )
}

export default Button
