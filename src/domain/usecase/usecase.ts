import { formatMetersByKm } from "../common/parse"
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { OptionsEntity } from "../entity/ride"
import { CalculateRideEstimateUseCaseRepositoryInterface } from "./respository/ride"
import { CalculateRideEstimateUseCaseRequest, CalculateRideEstimateUseCaseResponse } from "./ucio/ride"
import { CalculateRideEstimateUseCaseValidateInterface } from "./validate/ride"

class CalculateRideEstimateUseCase {
    public validate: CalculateRideEstimateUseCaseValidateInterface
    public repository: CalculateRideEstimateUseCaseRepositoryInterface

    constructor(validate: CalculateRideEstimateUseCaseValidateInterface,
        repository: CalculateRideEstimateUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async calculateRideEstimate(req: CalculateRideEstimateUseCaseRequest): Promise<CalculateRideEstimateUseCaseResponse> {
        try {
            const messageError = this.validate.calculateRideEstimate(req)

            if (messageError) {
                console.log(`${TAG_PRE_CONDITION_ERROR} ${messageError}`)
                return new CalculateRideEstimateUseCaseResponse(null, null, new PreconditionError(messageError))
            } else {
                const { customerID, origin, destination } = req

                const route = await this.repository.routeCalculation(origin, destination)

                let distance = formatMetersByKm(route.distanceMeters)

                const drivers = await this.repository.listDriversByKm(distance)

                let options: OptionsEntity[] = []

                if (drivers) {
                    for (let index = 0; index < drivers.length; index++) {
                        const drive = drivers[index]

                        const review = {
                            rating: drive.rating,
                            comment: drive.comment
                        }

                        const value = distance * drive.rating


                        const option = new OptionsEntity(
                            drive.ID,
                            drive.name,
                            drive.description,
                            drive.vehicle,
                            review,
                            value
                        )

                        options.push(option)

                    }
                }

                return new CalculateRideEstimateUseCaseResponse(route, options, null)
            }

        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new CalculateRideEstimateUseCaseResponse(null, null, new InternalServerError(error.message))
        }
    }
}

export {
    CalculateRideEstimateUseCase
}