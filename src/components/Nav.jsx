import '../styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi'
import { MdAccountCircle, MdOutlineLogout } from 'react-icons/md'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Nav = ({ cart, user, handleLogout }) => {
  const [logoutDisplay, setLogoutDisplay] = useState('none')

  return (
    <div className="navBar">
      <ul className="navUl">
        <li className="brand">
          <Link to="/">H-Shop</Link>
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
        <section
          onMouseEnter={() => setLogoutDisplay('block')}
          onMouseLeave={() => setLogoutDisplay('none')}
        >
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
          {user && (
            <div className="logout" style={{ display: `${logoutDisplay}` }}>
              <MdOutlineLogout className="user-icon" onClick={handleLogout} />
            </div>
          )}
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
