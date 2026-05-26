import { createContext,  useState, useContext } from "react"

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState([])

   const addToCart = (cat) => {
    setCartItems(prev => {
        const existing = prev.find(item => item.id === cat.id)

        if (existing) {
        return prev.map(item =>
        item.id === cat.id
          ? { ...item, quantity: item.quantity + 1 }
           : item
        )
    }

    return [...prev, { ...cat, quantity: 1 }]
  })
}

    const decreaseQuantity = (id) => {
    setCartItems(prev =>
        prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
    )
}

   const increaseQuantity = (id) => {
    setCartItems(prev =>
        prev.map(item =>
        item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    )
}

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    return(
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, setCart: setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}