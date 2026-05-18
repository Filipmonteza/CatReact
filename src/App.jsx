import "./styles/global.css"
import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cats from "./pages/Cats"
import Owner from "./pages/Owner"
import Cart from "./pages/Cart"

function App() {
  const [cartItems, setCartItems] = useState([])

  // Function to add a cat to the cart
  const addToCart = (cat) => {

    // Check if cat is already in cart
    const AlreadyExists = cartItems.some((item) => item.id === cat.id
  )
      // Prevent adding duplicates to cart
    if (AlreadyExists) {
      return
    }

    // Add cat to cart
    setCartItems([...cartItems, cat])

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/cats" element={<Cats />} />
      
      <Route path="/owner" element={<Owner />} />

      <Route path="/cart" element={<Cart />} />


    </Routes>

  )
}

export default App