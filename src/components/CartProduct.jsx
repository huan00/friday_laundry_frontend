import React from 'react'

const CartProduct = ({ product }) => {
  return (
    <div className="cartProduct">
      <div className="cart-product-content">
        <img src={product.image} alt="product image" />
        <h4>{product.title}</h4>
        <div>
          <p>Price: ${product.price}</p>
          <p>Size: {product.size}</p>
          <p>Quanity: {product.quanity}</p>
        </div>
      </div>
      <div className="cartProduct-control">
        <p>Edit</p>
        <p>Remove</p>
      </div>
    </div>
  )
}

export default CartProduct
