import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

function Home() {

  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <h1>Cat Explorer</h1>
      </main>
    </>
  )
}

export default Home