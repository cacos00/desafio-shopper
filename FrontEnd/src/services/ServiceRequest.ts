import axios from "axios"
import { RideConfirmeRequestType, RideEstimateRequestType } from "../components/EstimateRide/EstimateRideViewType"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080"
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
}

const serviceRequest = new ServiceRequest()

export {
    serviceRequest
}