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

async function generateStaticMapUrl(origin: any, destination: any): Promise<string> {
    const baseUrl = "https://maps.googleapis.com/maps/api/staticmap"
    const size = "600x300"
    const markers = `markers=color:blue|label:A|${origin.lat},${origin.lng}&markers=color:red|label:B|${destination.lat},${destination.lng}`
    const path = `path=color:0x0000ff|weight:5|${origin.lat},${origin.lng}|${destination.lat},${destination.lng}`

    return `${baseUrl}?size=${size}&${markers}&${path}&key=${process.env.GOOGLE_API_KEY}`
}

export {
    getCoordinates,
    generateStaticMapUrl
}