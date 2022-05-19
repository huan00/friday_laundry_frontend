import React, { useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import '../styles/Women.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Women = ({ products }) => {
  const [title, setTitle] = useState('Shop Women')
  return (
    <div className="women-container">
      <div className="womenBanner-container">
        <Banner title={title} className={'women-banner'} />
      </div>
      <div className="women-prod-container">
        {products.length &&
          products.map(
            (prod, index) =>
              prod.category === "women's clothing" && (
                <Link to={`/product/${prod.id}`} key={index}>
                  <Products key={prod.id} {...prod} className={'women-prod'} />
                </Link>
              )
          )}
      </div>
    </div>
  )
}

export default Women
