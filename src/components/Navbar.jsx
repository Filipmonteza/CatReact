import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Cat Explorer
      </h2>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/owner">Owner</Link>
        </li>

        <li>
          <Link to="/cats">Cats</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      {/* Cart Button */}
      <div className="nav-right">
        <Link to="/cart" className="cart-btn">
          <ShoppingCart size={20} />
          Cart
        </Link>
      </div>

    </nav>
  )
}

export default Navbar