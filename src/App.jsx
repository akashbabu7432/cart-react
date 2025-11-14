import React from 'react'
import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/View" element={<View />} />
        <Route path="/Pnf" element={<Pnf/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App