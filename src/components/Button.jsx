import React from 'react'

const Button = ({ text, className }) => {
  return (
    <div className={className}>
      <button>{text}</button>
    </div>
  )
}

export default Button
