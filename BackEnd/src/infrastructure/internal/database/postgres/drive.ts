import { DriverEntity } from "../../../../domain/entity/drive"
import { Connection } from "./connection"
import { DriverModel } from "./model/drive"
import { toDriverEntity } from "./trasnformer/drive"
import { ListDriversByKmWrapper } from "./wrapper/drive"

async function listDriversByKm(km: number): Promise<DriverEntity[] | null> {
    const repository = await Connection.getRepository(DriverModel)

    const wrapper = new ListDriversByKmWrapper(km)
    const result = await repository.query(wrapper.getSQL(), wrapper.getParameters())

    return result ? result.map((el: DriverEntity) => toDriverEntity(el)) : []
}

async function getDriverByID(ID: number): Promise<DriverEntity | null> {
    const repository = await Connection.getRepository(DriverModel)
    const result = await repository.findOne({where: { ID }})

    return result ? toDriverEntity(result) : null
}

export {
    listDriversByKm,
    getDriverByID
}