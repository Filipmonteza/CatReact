import { Row, Col } from "react-bootstrap"
import CatCard from "./CatCard"

function CatList({ cats, addToCart, cartItems }) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">

      {cats.map(cat => (
        <Col key={cat.id}>
          <CatCard
            cat={cat}
            addToCart={addToCart}
            cartItems={cartItems}
          />
        </Col>
      ))}

    </Row>
  )
}

export default CatList