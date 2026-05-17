import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CatList from "../components/CatList"
import { useEffect, useState } from "react"
import { fetchCats } from "../services/Api"

function Cats() {
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

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <>
      <Navbar />

      <main>
        <h1>All Cat Breeds</h1>
        <CatList cats={cats} />
      </main>

      <Footer />
    </>
  )
}

export default Cats