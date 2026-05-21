import { createContext,  useState, useContext } from "react"


export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState([])

    const addToCart = (cat) => {
        const existing = cartItems.find(item => item.id === cat.id)
        if(existing) {
            setCartItems(cartItems.map(item =>
                item.id === cat.id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        } else {
            setCartItems([...cartItems, { ...cat, quantity: 1 }])
        }
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const setCart = (items) =>  setCartItems(items)

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}