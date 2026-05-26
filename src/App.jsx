import "./styles/global.css"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cats from "./pages/Cats"
import Owner from "./pages/Owner"
import Cart from "./pages/Cart"
import CatDetails from "./pages/CatDetails"

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/cats"
        element={<Cats />}
      />

      <Route
        path="/cat/:id"
        element={<CatDetails />}
      />

      <Route
        path="/owner"
        element={<Owner />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

    </Routes>

  )
}

export default App