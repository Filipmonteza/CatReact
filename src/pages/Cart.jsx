import { useState } from "react"
import { Container, Row, Col, Card, Button, ButtonGroup, Modal, Form } from "react-bootstrap"
import { CartFill } from "react-bootstrap-icons"
import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"
import { useCart } from "../context/CartContext"

function Cart() {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity, setCart } = useCart()
  
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
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields to complete your order.")
      return
    }
    setShowModal(false)
    setCart([])
    alert(`Order confirmed! Thank you, ${formData.name}! Your order will be delivered to ${formData.address}.`)
  }

  return (
    <>
      <NavbarComp />

      <Container className="py-5">
        <h1 className="mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-muted">No cats added yet.</p>
        ) : (
          <>
            <Row className="g-3 mb-4">
              {cartItems.map((cat) => (
                <Col key={cat.id} xs={12} md={6} lg={4}>
                  <Card className="shadow-sm h-100">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Title className="mb-1">{cat.name}</Card.Title>
                        <Card.Text className="text-muted mb-0">
                          <strong>Origin:</strong> {cat.origin}
                        </Card.Text>
                        <Card.Text className="mb-0">
                          <strong>Quantity:</strong> {cat.quantity}
                        </Card.Text>
                      </div>
                      <ButtonGroup>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => decreaseQuantity(cat.id)}
                        >
                          -
                        </Button>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => removeFromCart(cat.id)}
                        >
                          <CartFill size={16} />
                        </Button>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => increaseQuantity(cat.id)}
                        >
                          +
                        </Button>
                      </ButtonGroup>
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
                required
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
                required
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
                required
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