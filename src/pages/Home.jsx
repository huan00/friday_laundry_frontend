import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Promotion from '../components/Promotion'

const Home = () => {
  let count = 10
  return (
    <div>
      <header>
        <Banner title={'T SHOP'} sub={"There's One for Everyone"} />
      </header>
      <section>
        <Carousel />
      </section>
      <section>
        <Banner title={'New Drops'} sub={''} />
      </section>
      <div className="productContent">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Button text={'Shop New'} />
      </div>
      <Promotion />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
