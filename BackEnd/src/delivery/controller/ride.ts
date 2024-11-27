import { CalculateRideEstimateUseCaseRequest } from "../../domain/usecase/ucio/ride"
import { CalculateRideEstimateUseCase } from "../../domain/usecase/ride"
import { CalculateRideEstimateUseCaseRepository } from "../../infrastructure/provider/repository/ride"
import { CalculateRideEstimateUseCaseValidate } from "../../infrastructure/provider/validate/ride"
import { SuccessResponse } from "../response/response"
import { Request, Response } from "express"

class CalculateRideEstimateController {
    async calculateRideEstimate(req: Request, res: Response): Promise<void> {
        const { customerID, origin, destination } = req.body

        const ucReq = new CalculateRideEstimateUseCaseRequest(customerID, origin, destination)

        const validate = new CalculateRideEstimateUseCaseValidate()
        const repository = new CalculateRideEstimateUseCaseRepository()
        const usecase = new CalculateRideEstimateUseCase(validate, repository)

        const ucRes = await usecase.calculateRideEstimate(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CalculateRideEstimateController
}