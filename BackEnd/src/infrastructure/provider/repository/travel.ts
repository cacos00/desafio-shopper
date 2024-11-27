import { TravelEntity } from "../../../domain/entity/travel"
import { CreateTravelUseCaseRepositoryInterface, ListTravelsByCustomerIDUseCaseRepositoryInterface } from "../../../domain/usecase/respository/travel"
import { createTravel, listTravelsByCustomerID } from "../../internal/database/postgres/travel"

class CreateTravelUseCaseRepository implements CreateTravelUseCaseRepositoryInterface {
    async createTravel(travel: TravelEntity): Promise<TravelEntity | null> {
        return await createTravel(travel)
    }
}

class ListTravelsByCustomerIDUseCaseRepository implements ListTravelsByCustomerIDUseCaseRepositoryInterface {
    async listTravelsByCustomerID(customerID: string, driverID?: number): Promise<TravelEntity[] | null> {
        return await listTravelsByCustomerID(customerID, driverID)
    }
}

export {
    CreateTravelUseCaseRepository,
    ListTravelsByCustomerIDUseCaseRepository
}