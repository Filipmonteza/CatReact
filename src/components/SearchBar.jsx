function SearchBar({ search, setSearch }) {
    
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search for a cat breed..."

                value={search} 

                onChange={(e) =>
                    setSearch(e.target.value)
                }
                
                className="search-input"

            />
        </div>
    )
}

export default SearchBar