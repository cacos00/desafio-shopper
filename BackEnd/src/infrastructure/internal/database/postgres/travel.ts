import { TravelEntity } from "../../../../domain/entity/travel"
import { Connection } from "./connection"
import { TravelModel } from "./model/travel"
import { toTravelEntity, toTravelModel } from "./trasnformer/travel"
import { ListTravelsByCustomerIDWrapper } from "./wrapper/travel"

async function createTravel(e: TravelEntity): Promise<TravelEntity> {
    const model = toTravelModel(e)
    const repository = await Connection.getRepository(TravelModel)

    const res = await repository.createQueryBuilder()
        .insert()
        .into(TravelModel)
        .values([model])
        .returning('*')
        .execute()

    const [row] = res.raw
0
    return toTravelEntity(row)
}

async function listTravelsByCustomerID(customerID: string, driverID?: number): Promise<TravelEntity[] | null> {
    const repository = await Connection.getRepository(TravelModel)

    const wrapper = new ListTravelsByCustomerIDWrapper(customerID, driverID)
    const result = await repository.query(wrapper.getSQL(), wrapper.getParameters())

    return result ? result.map((el: TravelEntity) => toTravelEntity(el)) : []
}

export {
    createTravel,
    listTravelsByCustomerID
}