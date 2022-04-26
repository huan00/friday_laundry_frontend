import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Banner
        title={''}
        sub={'Sale is on! 25% off sitewide using TEES25 at checkout'}
      />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
