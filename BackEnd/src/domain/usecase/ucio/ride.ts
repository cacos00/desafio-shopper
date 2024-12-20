import { ErrorEntity } from "../../entity/error"
import { DestinationEntity, OptionsEntity, RouteCalculationResponseEntity } from "../../entity/ride"

class CalculateRideEstimateUseCaseRequest {
    public customerID: string
    public origin: string
    public destination: string

    constructor(customerID: string, origin: string, destination: string) {
        this.customerID = customerID
        this.origin = origin
        this.destination = destination
    }
}

class CalculateRideEstimateUseCaseResponse {
    public calculateRide: RouteCalculationResponseEntity | null
    public options: OptionsEntity[] | null
    public routeResponse: any 
    public error: ErrorEntity | null

    constructor(calculateRide: RouteCalculationResponseEntity | null, options: OptionsEntity[] | null,
        routeResponse: any , error: ErrorEntity | null) {
        this.calculateRide = calculateRide
        this.options = options
        this.routeResponse = routeResponse
        this.error = error
    }

}

export {
    CalculateRideEstimateUseCaseRequest,
    CalculateRideEstimateUseCaseResponse
}