import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { Route, Routes } from 'react-router'
import Banner from './components/Banner'
import axios from 'axios'
import { BASE_URL } from './global'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import New from './pages/New'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
