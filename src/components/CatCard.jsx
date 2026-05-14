function CatCard({ cat }) {
    return (
        <div className="cat-card">

            <h2>{cat.name}</h2>

            <p>
                <strong>Origin:</strong> {cat.origin}
            </p>

            <p>
                <strong>Temperament:</strong> {cat.temperament}
            </p>

            <p className="description">
                {cat.description}
            </p>

        </div>
    )
}

export default CatCard