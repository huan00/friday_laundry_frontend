import React from 'react'

const Banner = ({ title, sub }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  )
}

export default Banner
