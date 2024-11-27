import axios from "axios"

async function getCoordinates(address: string) {
    const API_KEY = process.env.GOOGLE_API_KEY
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`

    try {
        const response = await axios.get(url)
        const data = response.data

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location
            return location
        } else {
            console.error(`Geocoding error: ${data.status}`)
            return null
        }
    } catch (error) {
        console.error('Error fetching geocoding data:', error)
        return null
    }
}

export {
    getCoordinates
}