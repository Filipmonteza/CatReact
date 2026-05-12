const API_URL = "https://api.thecatapi.com/v1/breeds?limit=30"

export async function fetchCats() {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error("Failed to fetch cats")
    }
    return await response.json()
}