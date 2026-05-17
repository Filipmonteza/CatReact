import CatCard from "./CatCard";

function CatList({ cats }) {
    return (
        <section className="cat-grid">

            {cats.map(cat => (
                <CatCard
                 key={cat.id}
                 cat={cat} 
                />
            ))}
        </section>
    )
}

export default CatList