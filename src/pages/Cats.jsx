import Navbar from "../components/NavbarComp"
import Footer from "../components/Footer"
import CatList from "../components/CatList"
import { useEffect, useState } from "react"
import { fetchCats } from "../services/api"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"

function Cats() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const[currentPage, setCurrentPage] = useState(1)
  const catsPerPage = 10

  // Filter cats based on search query
  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )

  // Pagination logic
  const lastCatIndex = currentPage * catsPerPage
  const firstCatIndex = lastCatIndex - catsPerPage
  const currentCats = 
  filteredCats.slice(firstCatIndex, lastCatIndex)

  

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
        <SearchBar
          search={search}
          setSearch={(value) => {
          setSearch(value)
          setCurrentPage(1)
        }}
        />

        <CatList cats={currentCats} />

        <Pagination
          totalCats={filteredCats.length}
          catsPerPage={catsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>

      <Footer />
    </>
  )
}

export default Cats