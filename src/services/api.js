const BASE_URL = "https://api.thecatapi.com/v1"

export async function fetchCats() {
    const response = await fetch(`${BASE_URL}/breeds?limit=30`)
    
    if(!response.ok) {
        throw new Error("Failed to fetch cats")
    }

    return await response.json()
}

export async function fetchCatImage(breedId) {
    const response = await fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    
    if(!response.ok) {
        throw new Error("Failed to fetch cat image")
    }

    const data = await response.json()
    return data[0]?.url || null
}