import { CalculateRideEstimateUseCaseRequest } from "../ucio/ride"

interface CalculateRideEstimateUseCaseValidateInterface {
    calculateRideEstimate(req: CalculateRideEstimateUseCaseRequest): Promise<string | null>
}

export {
    CalculateRideEstimateUseCaseValidateInterface
}