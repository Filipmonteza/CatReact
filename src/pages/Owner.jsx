import Navbar from "../components/NavbarComp"
import Footer from "../components/Footer"

function Owner() {

  return (
    <>
      <Navbar />
      <main className="owner-page">
        <div className="owner-card">
            <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Owner"
            />

            <h1>Filip</h1>
            
            <p>
                Hi! I'm Filip, a passionate cat lover and the creator of Cat Explorer. I built this app to share my love for cats and help others discover the amazing world of feline breeds. When I'm not coding, you can find me cuddling with my own cats or exploring cat cafes around the city.
            </p>

        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default Owner