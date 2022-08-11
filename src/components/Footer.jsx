import React from 'react'
import { Link } from 'react-router-dom'
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className={'footer-shopInfo'}>
        <h1>H-SHOP</h1>
        <p>hello@huan-zeng.com</p>
        <p>Tel: 917-770-7739</p>
      </div>
      <div className={'footer-shopPolicy'}>
        <div>
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to="/new">New</Link>
            </li>
            <li>
              <Link to="/women">Woman</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Our Store</h4>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>Subscribe</li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Term & Conditions</h4>
          <ul>
            <li>
              <Link to="/storepolicy">Store Policy</Link>
            </li>
            <li>
              <Link to="/shippingreturn">Shipping & Returns</Link>
            </li>
            <li>Payment Methods</li>
          </ul>
        </div>
      </div>
      <div className={'footer-social'}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
      <div className={'footer-copyright'}>
        <p>© 2023 by H Shop. Code By Huan</p>
      </div>
    </div>
  )
}

export default Footer
