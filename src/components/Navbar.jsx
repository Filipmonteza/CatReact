import { ShoppingCart } from "lucide-react"
// Navbar component to be used across the app for navigation
function Navbar() {

  return (
    <nav className="navbar">
      <h2 className="logo">
        Cat Explorer
        </h2>

      <ul className="nav-links">
        <li>
            <a href="/">Home</a>
        </li>

        <li>
            <a href="/owners">Owner</a>
        </li>

        <li>
            <a href="/cats">Cats</a>
        </li>
        
        <li>
            <a href="/contact">Contact</a>
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