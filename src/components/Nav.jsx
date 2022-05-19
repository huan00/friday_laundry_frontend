import React, { useState } from 'react'
import '../styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi'
import { MdAccountCircle } from 'react-icons/md'
import { faSignIn, faZ } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ cart, user }) => {
  return (
    <div className="navBar">
      <ul className="navUl">
        <li className="brand">
          <Link to="/">T-Shop</Link>
        </li>

        <li className="current">
          <Link to="new">New</Link>
        </li>
        <li>
          <Link to="women">Women</Link>
        </li>
        <li>
          <Link to="men">Men</Link>
        </li>
        <section>
          <li>
            {user ? (
              <Link to="/myaccount">
                <MdAccountCircle className="user-icon" />
              </Link>
            ) : (
              <Link to={'/login'}>
                <FontAwesomeIcon icon={faSignIn} /> Log In
              </Link>
            )}
          </li>

          <li>
            <div>
              <Link to="/cart">
                <GiShoppingBag className="cart" />
                <span className="cartItem">{cart}</span>
              </Link>
            </div>
          </li>
        </section>
      </ul>
    </div>
  )
}

export default Nav
