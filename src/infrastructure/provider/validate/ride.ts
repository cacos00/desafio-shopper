import { CalculateRideEstimateUseCaseRequest } from "../../../domain/usecase/ucio/ride"
import { CalculateRideEstimateUseCaseValidateInterface } from "../../../domain/usecase/validate/ride"
import { checkStringEmpty } from "./validate"

class CalculateRideEstimateUseCaseValidate implements CalculateRideEstimateUseCaseValidateInterface {
    calculateRideEstimate(req: CalculateRideEstimateUseCaseRequest): string | null {
        if (checkStringEmpty(req.customerID)) {
            return 'É necessário informar o identificador do usuário'
        }
        if (checkStringEmpty(req.destination)) {
            return 'É necessário informar o destino da viagem.'
        }
        if (checkStringEmpty(req.origin)) {
            return 'É necessário informar o ponto de partida da viagem.'
        }

        return null
    }
}

export {
    CalculateRideEstimateUseCaseValidate
}