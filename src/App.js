import { Route, Routes } from 'react-router'
import { BASE_URL } from './global'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'

import Nav from './components/Nav'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Banner from './components/Banner'
import axios from 'axios'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import New from './pages/New'
// import Women from './pages/Women'
// import Men from './pages/Men'
// import StorePolicy from './pages/StorePolicy'
// import ShippingReturn from './pages/ShippingReturn'
// import AboutUs from './pages/AboutUs'
// import Faq from './pages/Faq'
import {
  AboutUs,
  Login,
  Register,
  New,
  Women,
  Men,
  StorePolicy,
  ShippingReturn,
  Faq
} from './pages/index'

function App() {
  const [products, setProducts] = useState({})
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(0)

  useEffect(() => {
    if (!products.length) {
      getProducts()
    }
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/?limit=50`)
    setProducts(res.data)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  return (
    <div className="App">
      <Banner
        title={''}
        sub={'Sale is on! 25% off sitewide using TEES25 at checkout'}
        className={'topBanner'}
      />
      <Nav cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="product/:id"
            element={
              <ProductDetail
                products={products}
                setCart={setCart}
                cart={cart}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                toggleAuthenticated={toggleAuthenticated}
                setUser={setUser}
              />
            }
          />
          <Route path="signup" element={<Register />} />
          <Route path="new" element={<New products={products} />} />
          <Route path="women" element={<Women products={products} />} />
          <Route path="men" element={<Men products={products} />} />
          <Route path="storepolicy" element={<StorePolicy />} />
          <Route path="shippingreturn" element={<ShippingReturn />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
