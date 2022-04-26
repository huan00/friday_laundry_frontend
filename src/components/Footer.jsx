import React from 'react'
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
        <h1>T SHOP</h1>
        <p>Info@mysite.com</p>
        <p>Tel: 123-456-7890</p>
      </div>
      <div className={'footer-shopPolicy'}>
        <div>
          <h4>Shop</h4>
          <ul>
            <li>New</li>
            <li>Woman</li>
            <li>Men</li>
          </ul>
        </div>
        <div>
          <h4>Our Store</h4>
          <ul>
            <li>About Us</li>
            <li>Subscribe</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4>Term & Conditions</h4>
          <ul>
            <li>Store Policy</li>
            <li>Shipping & Returns</li>
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
        <p>© 2023 by T Shop. Proudly created with Wix.com</p>
      </div>
    </div>
  )
}

export default Footer
