import { DriverEntity } from "../../../domain/entity/drive"
import { RouteCalculationResponseEntity } from "../../../domain/entity/ride"
import { CalculateRideEstimateUseCaseRepositoryInterface } from "../../../domain/usecase/respository/ride"
import { computeRoutes } from "../../internal/api/route"
import { listDriversByKm } from "../../internal/database/postgres/drive"

class CalculateRideEstimateUseCaseRepository implements CalculateRideEstimateUseCaseRepositoryInterface {
    async routeCalculation(origin: string, destination: string): Promise<RouteCalculationResponseEntity> {
        return await computeRoutes(origin, destination)
    }

    async listDriversByKm(Km: number): Promise<DriverEntity[] | null> {
        return await listDriversByKm(Km)
    }
}

export {
    CalculateRideEstimateUseCaseRepository
}