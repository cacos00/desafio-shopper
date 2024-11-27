import axios from "axios"

async function computeRoutes(origin: string, destination: string): Promise<any> {
    const apiKey = process.env.GOOGLE_API_KEY

    const url = "https://routes.googleapis.com/directions/v2:computeRoutes"
    const data = {
        origin: {
            address: origin
        },
        destination: {
            address: destination
        },
        travelMode: "DRIVE",
    }

    const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline"
    }

    try {
        const response = await axios.post(url, data, { headers })

        if (!response.data.routes || response.data.routes.length === 0) {
            throw new Error("Nenhuma rota encontrada para os endereços fornecidos.")
        }

        const route = response.data.routes[0]

        return route
    } catch (error: any) {
        console.error("Erro ao calcular rotas:", error.response?.data || error.message)
        throw new Error("Erro ao calcular a rota. Verifique os endereços e tente novamente.")
    }
}

export {
    computeRoutes
}