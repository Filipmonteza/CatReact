import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import { useEffect, useState } from "react"

import { fetchCats } from "../services/Api"

function Home() {

  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadCats() {
      try {
        const data = await fetchCats()
        setCats(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadCats()

  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  
  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Cat Breeds</h1>

          <p>
            Explore different cat breeds, learn about their unique characteristics, and find your perfect feline companion. Whether you're a cat lover or just curious, our app provides a delightful experience to discover the wonderful world of cats.
          </p>

          <button
           className="explore-btn">Explore Breeds
           </button>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home