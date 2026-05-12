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

      <main className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Cat Breeds</h1>

          <p>
            Explore different cat breeds, learn about their unique characteristics, and find your perfect feline companion. Whether you're a cat lover or just curious, our app provides a delightful experience to discover the wonderful world of cats.
          </p>

          <button className="explore-btn">Explore Breeds</button>
        </div>
      </main>
    </>
  )
}

export default Home