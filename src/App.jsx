import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import './App.css'
import Product from './components/Product/Product'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
