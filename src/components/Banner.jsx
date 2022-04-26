import React from 'react'

const Banner = ({ title, sub, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  )
}

export default Banner
