import CatCard from "./CatCard";

function CatList({ 
     cats,
     addToCart,
     cartItems 
    }) {
    return (
        <section className="cat-grid">

            {cats.map(cat => (
                <CatCard
                 key={cat.id}
                 cat={cat}
                 addToCart={addToCart}
                 cartItems={cartItems}
                />
            ))}
        </section>
    )
}

export default CatList