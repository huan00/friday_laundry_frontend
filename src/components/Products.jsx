import React, { useState } from 'react'
import '../styles/ProductDetails.css'

const Products = ({
  className,
  image,
  price,
  title,
  description,
  rating,
  addToCart
}) => {
  const [sizes, setSizes] = useState([
    '',
    'Small',
    'Mediumn',
    'Large',
    'X-Large'
  ])
  const [product, setProduct] = useState({
    title: title,
    price: price,
    size: 'Small',
    quanity: 1,
    image: image
  })
  const renderQty = (qty) => {
    const quanities = []
    for (let i = 1; i < qty; i++) {
      quanities.push(<option value={i}>{i}</option>)
    }
    return quanities
  }

  const handleOnChangeProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (
    <div className={className}>
      <div className={'img-container'}>
        <img src={image} />
      </div>
      <h6>{title}</h6>
      <p>${price}</p>
      {className === 'productDetail' && (
        <div className="productDetail-content">
          <p>Rating: {rating.rate}</p>
          <div>
            <label htmlFor="size">Size</label>
            <select name="size" id="size" onChange={handleOnChangeProduct}>
              {sizes.map((size, idx) => (
                <option value={size} key={idx}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="qty">Qty</label>
          <select name="quanity" id="qty" onChange={handleOnChangeProduct}>
            {renderQty(10)}
          </select>
          <button onClick={() => addToCart(1, product)}>add to cart</button>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default Products
