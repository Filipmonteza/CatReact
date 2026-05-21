import Navbar from "../components/NavbarComp"
import Footer from "../components/Footer"
import GoogleMaps from "../components/GoogleMaps"
import { Container, Card, Badge, Row, Col } from "react-bootstrap"
import { Link45deg, Envelope, Telephone, GeoAlt } from "react-bootstrap-icons"

function Owner() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", padding: "80px 0" }}>
        <Container>
          <Row className="align-items-center g-5">

            <Col md={4} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Owner"
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: "50%",
                  border: "4px solid white",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                }}
              />
            </Col>

            <Col md={8} className="text-white">
              <h1 className="fw-bold mb-2">Filip</h1>
              <Badge bg="light" text="dark" className="mb-3 fs-6">Owner & Cat Lover</Badge>
              <p className="lead text-white-50">
                Hi! I'm Filip, a passionate cat lover and the creator of Cat Explorer.
                I built this app to share my love for cats and help others discover the
                amazing world of feline breeds.
              </p>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <h2 className="fw-bold mb-4">Contact</h2>
        <Row className="g-4">

          <Col sm={6} md={3}>
            <Card className="shadow-sm h-100 text-center p-3">
              <Envelope size={28} className="mx-auto mb-2 text-dark" />
              <Card.Title className="fs-6 text-muted">Email</Card.Title>
              <Card.Text>filip@catexplorer.com</Card.Text>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="shadow-sm h-100 text-center p-3">
              <Telephone size={28} className="mx-auto mb-2 text-dark" />
              <Card.Title className="fs-6 text-muted">Phone</Card.Title>
              <Card.Text>+46 70 123 45 67</Card.Text>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="shadow-sm h-100 text-center p-3">
              <GeoAlt size={28} className="mx-auto mb-2 text-dark" />
              <Card.Title className="fs-6 text-muted">Location</Card.Title>
              <Card.Text>Stockholm, Sweden</Card.Text>
            </Card>
          </Col>

          <Col sm={6} md={3}>
            <Card className="shadow-sm h-100 text-center p-3">
              <Link45deg size={28} className="mx-auto mb-2 text-dark" />
              <Card.Title className="fs-6 text-muted">GitHub</Card.Title>
              <Card.Text>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  github.com/filip
                </a>
              </Card.Text>
            </Card>
          </Col>

        </Row>
      </Container>

      <GoogleMaps location="Stockholm, Sweden" />

      <Footer />
    </>
  )
}

export default Owner