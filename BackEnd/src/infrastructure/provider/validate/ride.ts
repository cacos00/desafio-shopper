import { CalculateRideEstimateUseCaseRequest } from "../../../domain/usecase/ucio/ride"
import { CalculateRideEstimateUseCaseValidateInterface } from "../../../domain/usecase/validate/ride"
import { getCoordinates } from "../../internal/api/geocoding"
import { checkStringEmpty } from "./validate"

class CalculateRideEstimateUseCaseValidate implements CalculateRideEstimateUseCaseValidateInterface {
    async calculateRideEstimate(req: CalculateRideEstimateUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.customerID)) {
            return 'É necessário informar o seu CPF'
        }

        if (checkStringEmpty(req.destination)) {
            return 'É necessário informar o destino da viagem.'
        }

        if (checkStringEmpty(req.origin)) {
            return 'É necessário informar o ponto de partida da viagem.'
        }

        const isOriginValid = await getCoordinates(req.origin)
        if (!isOriginValid) {
            return 'O endereço de origem informado não é válido.'
        }

        const isDestinationValid = await getCoordinates(req.destination)
        if (!isDestinationValid) {
            return 'O endereço de destino informado não é válido.'
        }

        if (req.origin.trim().toLowerCase() === req.destination.trim().toLowerCase()) {
            return 'Os endereços de origem e destino não podem ser iguais.'
        }

        return null
    }
}

export {
    CalculateRideEstimateUseCaseValidate
}