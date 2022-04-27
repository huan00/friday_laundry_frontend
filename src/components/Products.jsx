import React from 'react'
import '../styles/ProductDetails.css'

const Products = ({ className, image, price, title, description, rating }) => {
  return (
    <div className={className}>
      <div className={'img-container'}>
        <img src={image} />
      </div>
      <h6>{title}</h6>
      <p>${price}</p>
      {className === 'productDetail' && (
        <>
          <p>Rating: {rating.rate}</p>
          <button className={'cartBtn'}>add to cart</button>
          <p>{description}</p>
        </>
      )}
    </div>
  )
}

export default Products
