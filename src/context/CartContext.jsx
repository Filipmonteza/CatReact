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

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0))
    }

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }   

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const setCart = (items) =>  setCartItems(items)

    return(
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}