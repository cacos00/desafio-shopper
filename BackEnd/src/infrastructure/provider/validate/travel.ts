import { CreateTravelUseCaseRequest, ListTravelsByCustomerIDUseCaseRequest } from "../../../domain/usecase/ucio/travel"
import { CreateTravelUseCaseValidateInterface, ListTravelsByCustomerIDUseCaseValidateInterface } from "../../../domain/usecase/validate/travel"
import { getDriverByID } from "../../internal/database/postgres/drive"
import { checkNumberEmpty, checkStringEmpty } from "./validate"

class CreateTravelUseCaseValidate implements CreateTravelUseCaseValidateInterface {
    async createTravel(req: CreateTravelUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.customerID)) {
            return 'É necessário informar o identificador do usuário'
        }
        if (checkStringEmpty(req.destination)) {
            return 'É necessário informar o destino da viagem.'
        }
        if (checkStringEmpty(req.origin)) {
            return 'É necessário informar o ponto de partida da viagem.'
        }
        if (req.origin.trim().toLowerCase() === req.destination.trim().toLowerCase()) {
            return 'Os endereços de origem e destino não podem ser iguais.'
        }
        if (checkStringEmpty(req.driver.name)) {
            return 'É necessário informar o nome do motorista'
        }
        if (checkNumberEmpty(req.driver.ID)) {
            return 'É necessário informar o identificador do motorista'
        }

        const driver = await getDriverByID(req.driver.ID)

        if (!driver) {
            return 'É necessário informar um motorista'
        }
        if (req.distance < driver.km) {
            return 'O motorista não aceita viagens com a quilometragem informada'
        }

        return null
    }
}

class ListTravelsByCustomerIDUseCaseValidate implements ListTravelsByCustomerIDUseCaseValidateInterface {
    async listTravelsByCustomerID(req: ListTravelsByCustomerIDUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.customerID)) {
            return 'É necessário informar o identificador do usuário'
        }

        if (req.driverID) {
            const driver = await getDriverByID(req.driverID)

            if (!driver) return 'Não existe motorista para o identificador informado'
        }

        return null
    }
}

export {
    CreateTravelUseCaseValidate,
    ListTravelsByCustomerIDUseCaseValidate
}