import Navbar from "../components/NavbarComp"
import Footer from "../components/Footer"

function Cart({
  cart,
  removeFromCart,
  setCart
}) {

  // Checkout function
  const handleCheckout = () => {

    alert(
      "Purchase completed successfully!"
    )

    // Empty cart after checkout
    setCart([])
  }

  return (

    <>
      <Navbar />

      <main className="cart-page">

        <h1 className="cart-title">
          Your Cart
        </h1>

        {cart.length === 0 ? (

          <p className="empty-cart">
            No cats added yet.
          </p>

        ) : (

          <>
            <section className="cart-grid">

              {cart.map((cat) => (

                <div
                  key={cat.id}
                  className="cart-item"
                >

                  <h2>{cat.name}</h2>

                  <p>
                    <strong>Origin:</strong>
                    {" "}
                    {cat.origin}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(cat.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </section>

            <div className="checkout-container">

              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Complete Purchase
              </button>

            </div>
          </>
        )}

      </main>

      <Footer />
    </>
  )
}

export default Cart