import { Request, Response } from "express"
import { CreateTravelUseCase, ListTravelsByCustomerIDUseCase } from "../../domain/usecase/travel"
import { CreateTravelUseCaseRequest, ListTravelsByCustomerIDUseCaseRequest } from "../../domain/usecase/ucio/travel"
import { CreateTravelUseCaseRepository, ListTravelsByCustomerIDUseCaseRepository } from "../../infrastructure/provider/repository/travel"
import { CreateTravelUseCaseValidate, ListTravelsByCustomerIDUseCaseValidate } from "../../infrastructure/provider/validate/travel"
import { SuccessResponse } from "../response/response"

class CreateTravelController {
    async createTravel(req: Request, res: Response): Promise<void> {
        const { customerID, origin, destination, distance, duration, driver, value } = req.body

        const ucReq = new CreateTravelUseCaseRequest(customerID, origin, destination, distance,
            duration, driver, value)

        const validate = new CreateTravelUseCaseValidate()
        const repository = new CreateTravelUseCaseRepository()
        const usecase = new CreateTravelUseCase(validate, repository)

        const ucRes = await usecase.createTravel(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class ListTravelsByCustomerIDController {
    async listTravelsByCustomerID(req: Request, res: Response): Promise<void> {
        const { customerID } = req.params

        const { driverID } = req.query

        const ucReq = new ListTravelsByCustomerIDUseCaseRequest(customerID, parseInt(driverID as string))

        const validate = new ListTravelsByCustomerIDUseCaseValidate()
        const repository = new ListTravelsByCustomerIDUseCaseRepository()
        const usecase = new ListTravelsByCustomerIDUseCase(validate, repository)

        const ucRes = await usecase.listTravelsByCustomerID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateTravelController,
    ListTravelsByCustomerIDController
}