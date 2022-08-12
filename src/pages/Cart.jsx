import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../components/CartProduct'
import '../styles/Cart.css'

export const Cart = ({ cartProduct, setCartProduct }) => {
  const cartMsg = 'Cart is empty'
  const continueShopping = 'Continue Shopping'
  const [totalPrice, setTotalPrice] = useState('')

  useEffect(() => {
    getTotalPrice(cartProduct)
  }, [cartProduct])

  const getTotalPrice = (data) => {
    const price = data?.reduce(
      (prev, prod) => prev + parseInt(prod.price) * parseInt(prod.quanity),
      0
    )
    setTotalPrice(parseInt(price))
  }

  const handleEdit = (index, product) => {
    cartProduct.splice(index, 1, product)
    localStorage.setItem('cart', JSON.stringify(cartProduct))
  }

  const handleRemove = (product) => {
    const newProdList = cartProduct.filter(
      (prod) => prod.title !== product.title
    )
    setCartProduct(newProdList)
    localStorage.setItem('cart', JSON.stringify(newProdList))
  }

  return (
    <div className="cart-page">
      <div className="cart-title">
        <h3>My cart</h3>
      </div>
      {cartProduct?.length === 0 ? (
        <div className="cart-empty">
          <p>{cartMsg}</p>
          <Link to="/">{continueShopping}</Link>
        </div>
      ) : (
        <div className="cart-product">
          {cartProduct?.map((prod, idx) => (
            <CartProduct
              product={prod}
              key={idx}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
              index={idx}
            />
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Order Summary:</p>
        <p>Sub Total: ${totalPrice}</p>
      </div>
    </div>
  )
}
