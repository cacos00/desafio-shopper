import { TAG_PRE_CONDITION_ERROR, PreconditionError, TAG_INTERNAL_SERVER_ERROR, InternalServerError } from "../entity/error"
import { TravelEntity } from "../entity/travel"
import { CreateTravelUseCaseRepositoryInterface, ListTravelsByCustomerIDUseCaseRepositoryInterface } from "./respository/travel"
import { CreateTravelUseCaseRequest, CreateTravelUseCaseResponse, ListTravelsByCustomerIDUseCaseRequest, ListTravelsByCustomerIDUseCaseResponse } from "./ucio/travel"
import { CreateTravelUseCaseValidateInterface, ListTravelsByCustomerIDUseCaseValidateInterface } from "./validate/travel"

class CreateTravelUseCase {
    public validate: CreateTravelUseCaseValidateInterface
    public repository: CreateTravelUseCaseRepositoryInterface

    constructor(validate: CreateTravelUseCaseValidateInterface,
        repository: CreateTravelUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async createTravel(req: CreateTravelUseCaseRequest): Promise<CreateTravelUseCaseResponse> {
        try {
            const messageError = await this.validate.createTravel(req)

            if (messageError) {
                console.log(`${TAG_PRE_CONDITION_ERROR} ${messageError}`)
                return new CreateTravelUseCaseResponse(null, new PreconditionError(messageError))
            } else {
                const now = new Date()
                const travelEntity = new TravelEntity(
                    null,
                    req.customerID,
                    req.origin,
                    req.destination,
                    req.distance,
                    req.duration,
                    req.driver.ID,
                    req.driver.name,
                    req.value,
                    now
                )
                const success = await this.repository.createTravel(travelEntity)

                if (success) {
                    return new CreateTravelUseCaseResponse(true, null)
                } else {
                    return new CreateTravelUseCaseResponse(false, null)
                }
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new CreateTravelUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class ListTravelsByCustomerIDUseCase {
    public validate: ListTravelsByCustomerIDUseCaseValidateInterface
    public repository: ListTravelsByCustomerIDUseCaseRepositoryInterface

    constructor(validate: ListTravelsByCustomerIDUseCaseValidateInterface,
        repository: ListTravelsByCustomerIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async listTravelsByCustomerID(req: ListTravelsByCustomerIDUseCaseRequest): Promise<ListTravelsByCustomerIDUseCaseResponse> {
        try {
            const messageError = await this.validate.listTravelsByCustomerID(req)

            if (messageError) {
                console.log(`${TAG_PRE_CONDITION_ERROR} ${messageError}`)
                return new ListTravelsByCustomerIDUseCaseResponse(null, null, new PreconditionError(messageError))
            } else {
                const { customerID, driverID } = req

                const travels = await this.repository.listTravelsByCustomerID(customerID, driverID)

                return new ListTravelsByCustomerIDUseCaseResponse(customerID, travels, null)
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new ListTravelsByCustomerIDUseCaseResponse(null, null, new InternalServerError(error.message))
        }
    }
}

export {
    CreateTravelUseCase,
    ListTravelsByCustomerIDUseCase
}