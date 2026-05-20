import "./styles/global.css"
import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cats from "./pages/Cats"
import Owner from "./pages/Owner"
import Cart from "./pages/Cart"
import CatDetails from "./pages/CatDetails"

function App() {

  const [cartItems, setCartItems] = useState([])

  // Add cat to cart
  const addToCart = (cat) => {

    setCartItems([
      ...cartItems,
      cat
    ])
  }

  // Remove cat from cart
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        cat => cat.id !== id
      )
    )
  }

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/cats"
        element={
          <Cats
            addToCart={addToCart}
            cartItems={cartItems}
          />
        }
      />

      <Route
        path="/cat/:id"
        element={<CatDetails
          addToCart={addToCart}
        />}
      />

      <Route
        path="/owner"
        element={<Owner />}
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cartItems}
            removeFromCart={removeFromCart}
            setCart={setCartItems}
          />
        }
      />

    </Routes>

  )
}

export default App