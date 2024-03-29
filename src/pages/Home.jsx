import React, { useState } from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Products from '../components/Products'
import Promotion from '../components/Promotion'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import {
  faLongArrowAltRight,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({ products }) => {
  const [bottomBanner, setBottomBanner] = useState(
    'GET 10% OFF YOUR FIRST ORDER!'
  )

  return (
    <div>
      <header>
        <Banner
          title={'H-SHOP'}
          sub={"There's One for Everyone"}
          className={'mainBanner'}
        />
      </header>
      <section>
        <Carousel products={products} />
      </section>
      <section>
        <Banner title={'New Drops'} sub={''} className={'mid-banner'} />
      </section>

      <div className="productContent">
        {products.length > 0 &&
          products.map(
            (product) =>
              (product.category === "men's clothing" ||
                product.category === "women's clothing") && (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Products {...product} className={'product'} />
                </Link>
              )
          )}
      </div>

      <div>
        <Button text={'Shop New'} className={'shopNewBtn'} />
      </div>
      <Promotion className={'promotion'} />
      <section className="bottomBanner-section">
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          size="xl"
          className={'bottomBanner-FA'}
        />
        <Banner title={bottomBanner} className={'bottomBanner'} />
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          size="xl"
          className={'bottomBanner-FA'}
        />
      </section>
    </div>
  )
}

export default Home
