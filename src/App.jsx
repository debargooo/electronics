import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import ScrollToTop from './components/ScrollToTop'
import Product from './pages/Products'
import About from './pages/About'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
