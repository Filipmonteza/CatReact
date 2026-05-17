import "./styles/global.css"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Cats from "./pages/Cats"
import Owner from "./pages/Owner"

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/cats" element={<Cats />} />
      
      <Route path="/owner" element={<Owner />} />


    </Routes>

  )
}

export default App