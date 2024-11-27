import { DriverEntity } from "../../entity/drive"
import { RouteCalculationResponseEntity } from "../../entity/ride"

interface CalculateRideEstimateUseCaseRepositoryInterface {
    routeCalculation(origin: string, destination: string): Promise<RouteCalculationResponseEntity>
    listDriversByKm(Km: number): Promise<DriverEntity[] | null>
}

export {
    CalculateRideEstimateUseCaseRepositoryInterface
}