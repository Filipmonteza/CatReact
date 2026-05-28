import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Spinner, Button, Row, Col } from "react-bootstrap"
import { Cart, ArrowLeft } from "react-bootstrap-icons"
import NavbarComp from "../components/NavbarComp"
import Footer from "../components/Footer"
import { fetchCats, fetchCatImage } from "../services/Api"
import { useCart } from "../context/useCart"


function CatDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const [cat, setCat] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function loadCat() {
      try {
        const cats = await fetchCats()
        const selectedCat = cats.find(cat => cat.id === id)
        setCat(selectedCat)
        const image = await fetchCatImage(id)
        setImageUrl(image)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadCat()
  }, [id])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" variant="dark" />
      </div>
    )
  }

  if (!cat) {
    return <h1 className="text-center mt-5">Cat not found</h1>
  }

  return (
    <>
      <NavbarComp />

      <Container className="py-5">

        <Button
          variant="outline-dark"
          className="mb-4 d-flex align-items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} /> Back
        </Button>

        <Card className="shadow-lg">
          {imageUrl && (
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={cat.name}
              className="img-fluid w-400"
              style={{ height: "400px", objectFit: "cover" }}
            />
          )}

          <Card.Body className="p-4">
            <Card.Title className="fs-1 mb-4">{cat.name}</Card.Title>

            <Row className="mb-3">
              <Col md={6}>
                <Card.Text>
                  <strong>Origin:</strong> {cat.origin}
                </Card.Text>
                <Card.Text>
                  <strong>Temperament:</strong> {cat.temperament}
                </Card.Text>
              </Col>
            </Row>

            <Card.Text>
              <strong>Description:</strong> {cat.description}
            </Card.Text>

            <Button
              variant="dark"
              size="lg"
              className="mt-3 d-flex align-items-center gap-2"
              onClick={() => addToCart(cat)}
            >
              <Cart size={20} /> Add to Cart
            </Button>

          </Card.Body>
        </Card>

      </Container>

      <Footer />
    </>
  )
}

export default CatDetails