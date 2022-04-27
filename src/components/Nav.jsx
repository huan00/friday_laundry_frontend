import React, { useState } from 'react'
import '../styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [cart, setCart] = useState(0)
  return (
    <div className="navBar">
      <ul className="navUl">
        <li className="brand">T-Shop</li>
        <li>New</li>
        <li>Women</li>
        <li>Men</li>
        <section>
          <Link to={'/login'}>
            <li>
              <FontAwesomeIcon icon={faSignIn} /> Log In
            </li>
          </Link>
          <li>
            <div>
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="xl"
                className="cart"
              />
              <span className="cartItem">{cart}</span>
            </div>
          </li>
        </section>
      </ul>
    </div>
  )
}

export default Nav
