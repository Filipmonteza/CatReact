import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="md"> 
      <Container>

        <Navbar.Brand as={Link} to="/">Cat Explorer</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/owner">Owner</Nav.Link>
            <Nav.Link as={Link} to="/cats">Cats</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Button as={Link} to="/cart" variant="outline-light" className="d-flex align-items-center gap-2">
              <ShoppingCart size={20} />
              Cart
            </Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavbarComp