import { useState } from "react"
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap"
import { Trash } from "lucide-react"
import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"

function Cart({ cart, removeFromCart, setCart }) {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOrder = () => {
    setShowModal(false)
    setCart([])
    alert(`Order confirmed! Thank you, ${formData.name}! Your order will be delivered to ${formData.address}.`)
  }

  return (
    <>
      <NavbarComp />

      <Container className="py-5">
        <h1 className="mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-muted">No cats added yet.</p>
        ) : (
          <>
            <Row className="g-3 mb-4">
              {cart.map((cat) => (
                <Col key={cat.id} xs={12} md={6} lg={4}>
                  <Card className="shadow-sm h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Title className="mb-1">{cat.name}</Card.Title>
                        <Card.Text className="text-muted mb-0">
                          <strong>Origin:</strong> {cat.origin}
                        </Card.Text>
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(cat.id)}
                      >
                        <Trash size={16} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-end">
              <Button variant="dark" size="lg" onClick={() => setShowModal(true)}>
                Complete Purchase
              </Button>
            </div>
          </>
        )}
      </Container>

      {/* Order Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Order</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                placeholder="Enter your delivery address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleOrder}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  )
}

export default Cart