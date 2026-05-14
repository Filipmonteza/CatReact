import "./styles/global.css"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cats from "./pages/Cats"

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/cats" element={<Cats />} />


    </Routes>

  )
}

export default App