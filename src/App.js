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
        className={'topBanner'}
      />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
