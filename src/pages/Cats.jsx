import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CatList from "../components/CatList"
import { useEffect, useState } from "react"
import { fetchCats } from "../services/Api"
import SearchBar from "../components/SearchBar"

function Cats() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  const filtereredcats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )

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

      <main className="cats-page">
        <h1 className="page-title">All Cat Breeds</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <CatList cats={filtereredcats} />
      </main>

      <Footer />
    </>
  )
}

export default Cats