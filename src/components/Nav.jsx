import React, { useState } from 'react'
import '../styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ cart }) => {
  return (
    <div className="navBar">
      <ul className="navUl">
        <li className="brand">
          <Link to="/">T-Shop</Link>
        </li>

        <li>
          <Link to="new">New</Link>
        </li>
        <li>Women</li>
        <li>Men</li>
        <section>
          <li>
            <Link to={'/login'}>
              <FontAwesomeIcon icon={faSignIn} /> Log In
            </Link>
          </li>

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
