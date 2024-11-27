import axios from "axios"
import { RideConfirmeRequestType, RideEstimateRequestType } from "../components/EstimateRide/EstimateRideViewType"

const API_URL = "http://localhost:8080"

const API_KEY = "AIzaSyDUEPfeTCpCYjgnUAEtxoInQBuMijED2ug"

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api"

class ServiceRequest {
    async rideEstimate(formData: RideEstimateRequestType): Promise<any> {
        const response = await axios.post(`${API_URL}/ride/estimate`, formData)
        return response.data
    }

    async rideConfirm(formData: RideConfirmeRequestType): Promise<any> {
        const response = await axios.patch(`${API_URL}/ride/confirm`, formData)
        return response.data
    }

    async listTravelsByCustomer(customerID: string, driverID?: number): Promise<any> {
        const endpoint = driverID ? `${API_URL}/ride/${customerID}?driverID=${driverID}` : `${API_URL}/ride/${customerID}`
        const response = await axios.get(endpoint)
        return response.data
    }

    async generateStaticMapUrl(origin: any, destination: any): Promise<string> {
        const baseUrl = "https://maps.googleapis.com/maps/api/staticmap"
        const size = "600x300"
        const markers = `markers=color:blue|label:A|${origin.lat},${origin.lng}&markers=color:red|label:B|${destination.lat},${destination.lng}`;
        const path = `path=color:0x0000ff|weight:5|${origin.lat},${origin.lng}|${destination.lat},${destination.lng}`;

        return `${baseUrl}?size=${size}&${markers}&${path}&key=${API_KEY}`;
    }
}

const serviceRequest = new ServiceRequest()

export {
    serviceRequest
}