import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart, faSignIn } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div>
      <ul>
        <li>T-Shop</li>
        <li>New</li>
        <li>Women</li>
        <li>Men</li>
        <li>
          <FontAwesomeIcon icon={faSignIn} /> Login
        </li>
        <li>
          <FontAwesomeIcon icon={faUserCircle} />
          Register
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </ul>
    </div>
  )
}

export default Nav
