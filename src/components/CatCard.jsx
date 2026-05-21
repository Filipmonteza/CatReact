import { useEffect, useState } from "react"
import { Card, Button, Spinner } from "react-bootstrap"
import { fetchCatImage } from "../services/Api"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function CatCard({ cat }) {
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setLoading] = useState(true)
    const {addToCart} = useCart()

  useEffect(() => {
    fetchCatImage(cat.id)
      .then(setImageUrl)
      .catch(() => setImageUrl(null))
      .finally(() => setLoading(false))
  }, [cat.id])

  return (
    <Card className="h-100 shadow-sm">

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : imageUrl ? (
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={cat.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      ) : (
        <div className="d-flex justify-content-center align-items-center bg-secondary text-white" style={{ height: "200px" }}>
          No image
        </div>
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title>{cat.name}</Card.Title>

        <Card.Text as="div" className="mb-3">
          <p className="mb-1"><strong>Origin:</strong> {cat.origin}</p>
        </Card.Text>

        <Button
          variant="dark"
          className="mt-auto w-100"
          onClick={() => addToCart(cat)}
        >
          Add to Cart
        </Button>

        <Button
          as={Link}
          to={`/cat/${cat.id}`}
          variant="outline-dark"
          className="mt-2"
        >
          View Details
        </Button>
        
      </Card.Body>
    </Card>
  )
}

export default CatCard