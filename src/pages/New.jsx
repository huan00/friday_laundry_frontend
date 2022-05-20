import React, { useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import '../styles/New.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const New = ({ products }) => {
  const [title, setTitle] = useState('Shop New')
  return (
    <div className="newContainer">
      <div className="newprodBanner">
        <Banner title={title} className={'newProd-banner'} />
      </div>
      <div className="newProd-container">
        {products.length &&
          products.map(
            (prod, index) =>
              index < 9 && (
                <Link to={`/product/${prod.id}`} key={index}>
                  <Products key={prod.id} {...prod} className={'newProd-div'} />
                </Link>
              )
          )}
      </div>
    </div>
  )
}

export default New
