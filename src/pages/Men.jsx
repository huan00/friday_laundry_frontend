import React, { useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import '../styles/Women.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Men = ({ products }) => {
  const [title, setTitle] = useState('Shop Men')
  return (
    <div className="women-container">
      <div className="womenBanner-container">
        <Banner title={title} className={'women-banner'} />
      </div>
      <div className="women-prod-container">
        {products.length &&
          products.map(
            (prod, index) =>
              prod.category === "men's clothing" && (
                <Link to={`/product/${prod.id}`} key={prod.id}>
                  <Products key={prod.id} {...prod} className={'women-prod'} />
                </Link>
              )
          )}
      </div>
      <footer>
        <Footer className={'footerContent'} />
      </footer>
    </div>
  )
}

export default Men
