import axios from "axios"

async function computeRoutes(origin: string, destination: string): Promise<any> {
    const apiKey = process.env.GOOGLE_API_KEY

    const url = "https://routes.googleapis.com/directions/v2:computeRoutes"
    const data = {
        origin: {
            location: {
                latLng: {
                    latitude: -7.940833,
                    longitude: -34.826111,
                },
            },
        },
        destination: {
            location: {
                latLng: {
                    latitude: -8.050837,
                    longitude: -34.888333,
                },
            },
        },
        travelMode: "DRIVE",
    }

    const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters",
    }

    const response = await axios.post(url, data, { headers })
    const route = response.data.routes[0]

    console.log('route: ', route)
    return route
}

export {
    computeRoutes
}