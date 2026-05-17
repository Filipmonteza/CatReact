import { useEffect, useState } from "react"
import { fetchCatImage } from "../services/Api"


function CatCard({ cat }) {
    const [imageUrl, setImageUrl] = useState(null)

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

        </div>
    )
}

export default CatCard