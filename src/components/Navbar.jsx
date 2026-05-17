import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
// Navbar component to be used across the app for navigation
function Navbar() {

  return (
    <nav className="navbar">
      <h2 className="logo">
        Cat Explorer
        </h2>

      <ul className="nav-links">
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/owners">Owner</Link>
        </li>

        <li>
            <Link to="/cats">Cats</Link>
        </li>
        
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-right">
        <button className="cart-btn">
          <ShoppingCart size={20} />
          Cart
        </button>
      </div>
    </nav>
  )
}

export default Navbar