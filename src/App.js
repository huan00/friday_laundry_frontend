import { Route, Routes, useNavigate } from 'react-router'
import { BASE_URL } from './global'
import { useEffect, useState } from 'react'
import { CheckSession, deleteUser } from './services/Auth'

import Nav from './components/Nav'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Banner from './components/Banner'
import axios from 'axios'
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
import { Cart } from './pages/Cart'
import Footer from './components/Footer'
import Account from './pages/Account'

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState({})
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState('')
  const [cart, setCart] = useState(0)
  const [cartProduct, setCartProduct] = useState([])

  useEffect(() => {
    if (!products.length) {
      getProducts()
    }
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    if (JSON.parse(localStorage.getItem('cart'))) {
      setCartProduct(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  useEffect(() => {
    if (cartProduct) {
      setCart(cartProduct.length)
    }
  }, [cartProduct])

  const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/?limit=50`)
    setProducts(res.data)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleAddCartProduct = (data) => {
    setCartProduct([...cartProduct, data])
    localStorage.setItem('cart', JSON.stringify([...cartProduct, data]))
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser('')
    navigate('/')
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteUser(user.id)
    localStorage.removeItem('token')
    setUser('')
    navigate('/')
  }

  return (
    <div className="App">
      <Banner
        title={''}
        sub={'Sale is on! 25% off sitewide using TEES25 at checkout'}
        className={'topBanner'}
      />
      <Nav cart={cart} user={user} handleLogout={handleLogout} />
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
                handleAddCartProduct={handleAddCartProduct}
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
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                cartProduct={cartProduct}
                setCartProduct={setCartProduct}
              />
            }
          />
          <Route path="storepolicy" element={<StorePolicy />} />
          <Route path="shippingreturn" element={<ShippingReturn />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />

          <Route
            path="myaccount"
            element={<Account user={user} handleDelete={handleDelete} />}
          />
        </Routes>
      </main>
      <footer>
        <Footer className={'footerContent'} />
      </footer>
    </div>
  )
}

export default App
