import { useEffect, useState } from "react"
import { fetchCatImage } from "../services/Api"


function CatCard({ cat, addToCart, cartItems }) {
    const [imageUrl, setImageUrl] = useState(null)

    const isInCart =
    cartItems.some(
    item => item.id === cat.id
  )

    useEffect(() => {
        fetchCatImage(cat.id)
        .then(setImageUrl)
        .catch(() => setImageUrl(null))
    }, [cat.id])

    return (
        <div className="cat-card">

           {imageUrl
            ? <img src={imageUrl} alt={cat.name} className="cat-card__img" />
            : <div className="cat-card__no-img">No image</div>
        }

            <h2>{cat.name}</h2>

            <p><strong>Origin:</strong> {cat.origin}</p>
            <p><strong>Temperament:</strong> {cat.temperament}</p>
            <p className="description">{cat.description}</p>
            <button 
                className="cart-add-btn" 
                onClick={() => addToCart(cat)}
                disabled={isInCart}
            >
                {isInCart 
                ? "Added to Cart" 
                : "Add to Cart"}
            </button>
        </div>
    )
}


export default CatCard