import React, { useState } from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Promotion from '../components/Promotion'
import '../styles/Home.css'
import {
  faLongArrowAltRight,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [bottomBanner, setBottomBanner] = useState(
    'GET 10% OFF YOUR FIRST ORDER!'
  )

  return (
    <div>
      <header>
        <Banner
          title={'T SHOP'}
          sub={"There's One for Everyone"}
          className={'mainBanner'}
        />
      </header>
      <section>
        <Carousel />
      </section>
      <section>
        <Banner title={'New Drops'} sub={''} className={'mid-banner'} />
      </section>
      <div className="productContent">
        <Products className={'product'} />
        <Products className={'product'} />
        <Products className={'product'} />
        <Products className={'product'} />
        <Products className={'product'} />
        <Products className={'product'} />
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
      <footer>
        <Footer className={'footerContent'} />
      </footer>
    </div>
  )
}

export default Home
