import { ErrorEntity } from "../../entity/error"
import { TravelEntity } from "../../entity/travel"

class CreateTravelUseCaseRequest {
    public customerID: string
    public origin: string
    public destination: string
    public distance: number
    public duration: string
    public driver: any
    public value: number

    constructor(customerID: string, origin: string, destination: string, distance: number,
        duration: string, driver: any, value: number) {
        this.customerID = customerID
        this.origin = origin
        this.destination = destination
        this.distance = distance
        this.duration = duration
        this.driver = driver
        this.value = value
    }
}

class CreateTravelUseCaseResponse {
    public success: boolean | null
    public error: ErrorEntity | null

    constructor(success: boolean | null, error: ErrorEntity | null) {
        this.success = success
        this.error = error
    }
}

class ListTravelsByCustomerIDUseCaseRequest {
    public customerID: string
    public driverID?: number

    constructor(customerID: string, driverID?: number) {
        this.customerID = customerID
        this.driverID = driverID
    }
}

class ListTravelsByCustomerIDUseCaseResponse {
    public customerID: string | null
    public rides: TravelEntity[] | null
    public error: ErrorEntity | null

    constructor(customerID: string | null, rides: TravelEntity[] | null, error: ErrorEntity | null) {
        this.customerID = customerID
        this.rides = rides
        this.error = error
    }
}

export {
    CreateTravelUseCaseRequest,
    CreateTravelUseCaseResponse,
    ListTravelsByCustomerIDUseCaseRequest,
    ListTravelsByCustomerIDUseCaseResponse
}