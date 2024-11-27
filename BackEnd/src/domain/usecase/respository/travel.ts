import { TravelEntity } from "../../entity/travel"

interface CreateTravelUseCaseRepositoryInterface {
    createTravel(travel: TravelEntity): Promise<TravelEntity | null>
}

interface ListTravelsByCustomerIDUseCaseRepositoryInterface {
    listTravelsByCustomerID(customerID: string, driverID?: number): Promise<TravelEntity[] | null>
}

export {
    CreateTravelUseCaseRepositoryInterface,
    ListTravelsByCustomerIDUseCaseRepositoryInterface
}