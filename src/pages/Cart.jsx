import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../components/CartProduct'
import '../styles/Cart.css'

export const Cart = ({ cart, cartProduct }) => {
  const [cartMsg, setCartMsg] = useState('Cart is empty')
  const [continueShopping, setContineShopping] = useState('Continue Shopping')
  const [totalPrice, setTotalPrice] = useState('')

  useEffect(() => {
    getTotalPrice(cartProduct)
  }, [cartProduct])

  const getTotalPrice = (data) => {
    let price = 0

    cartProduct.map((prod) => {
      price += parseInt(prod.price) * prod.quanity
    })

    setTotalPrice(parseInt(price))
  }
  return (
    <div className="cart-page">
      <div className="cart-title">
        <h3>My cart</h3>
      </div>
      {cart === 0 ? (
        <div className="cart-empty">
          <p>{cartMsg}</p>
          <Link to="/">{continueShopping}</Link>
        </div>
      ) : (
        <div className="cart-product">
          {cartProduct.map((prod, idx) => (
            <CartProduct product={prod} />
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Order Summary</p>
        <p>Sub Total: ${totalPrice}</p>
      </div>
    </div>
  )
}
