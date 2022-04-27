import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { Route, Routes } from 'react-router'
import Banner from './components/Banner'
import axios from 'axios'
import { BASE_URL } from './global'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    if (!products) {
      getProducts()
    }
  }, [])

  const getProducts = async () => {
    const res = await axios.get(`${BASE_URL}/?limit=50`)
    setProducts(res.data)
    console.log(res.data)
  }
  return (
    <div className="App">
      <Banner
        title={''}
        sub={'Sale is on! 25% off sitewide using TEES25 at checkout'}
        className={'topBanner'}
      />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="product/:id"
            element={<ProductDetail products={products} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
