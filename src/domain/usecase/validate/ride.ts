import { CalculateRideEstimateUseCaseRequest } from "../ucio/ride"

interface CalculateRideEstimateUseCaseValidateInterface {
    calculateRideEstimate(req: CalculateRideEstimateUseCaseRequest): string | null
}

export {
    CalculateRideEstimateUseCaseValidateInterface
}