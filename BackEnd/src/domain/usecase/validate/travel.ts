import { CreateTravelUseCaseRequest, ListTravelsByCustomerIDUseCaseRequest } from "../ucio/travel"

interface CreateTravelUseCaseValidateInterface {
    createTravel(req: CreateTravelUseCaseRequest): Promise<string | null>
}

interface ListTravelsByCustomerIDUseCaseValidateInterface {
    listTravelsByCustomerID(req: ListTravelsByCustomerIDUseCaseRequest): Promise<string | null>
}

export {
    CreateTravelUseCaseValidateInterface,
    ListTravelsByCustomerIDUseCaseValidateInterface
}