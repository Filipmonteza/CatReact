import Navbar from "../components/NavbarComp"
import Footer from "../components/Footer"
import { Container, Card, Badge } from "react-bootstrap"
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react"

function Owner() {
  return (
    <>
      <Navbar />

      <Container className="py-5 d-flex justify-content-center">
        <Card className="shadow-lg text-center" style={{ maxWidth: "500px", width: "100%" }}>

          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Owner"
            style={{ height: "600px", objectFit: "cover" }}
          />

          <Card.Body className="p-4">
            <Card.Title className="fs-2 mb-1">Filip</Card.Title>
            <Badge bg="dark" className="mb-3">Owner & Catlover</Badge>

            <Card.Text className="text-muted mb-4">
              Hi! I'm Filip, a passionate cat lover and the creator of Cat Explorer. 
              I built this app to share my love for cats and help others discover the 
              amazing world of feline breeds.
            </Card.Text>

            <hr />

            <div className="d-flex flex-column gap-2 text-start mt-3">
              <div className="d-flex align-items-center gap-2">
                <Mail size={18} /> <span>filip@catexplorer.com</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={18} /> <span>+46 70 123 45 67</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <MapPin size={18} /> <span>Stockholm, Sweden</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <ExternalLink size={18} />
                <a href="https://github.com" target="_blank" rel="noreferrer">github.com/filip</a>
              </div>
            </div>

          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  )
}

export default Owner