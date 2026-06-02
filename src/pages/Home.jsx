import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/NavbarComp"

function Home() {

  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Cat Breeds</h1>

          <p>
            Explore different cat breeds, learn about their unique characteristics, and find your perfect feline companion. Whether you're a cat lover or just curious, our app provides a delightful experience to discover the wonderful world of cats.
          </p>

          <Link to="/cats">
            <button className="explore-btn">Explore Breeds</button>
          </Link>

        </div>
      </main>
    
      <Footer />
    </>
  )
}

export default Home