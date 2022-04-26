import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className="App">
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
