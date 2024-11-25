import { DriverEntity } from "../../../../../domain/entity/drive"
import { DriverModel } from "../model/drive"

function toDriverEntity(m: DriverModel): DriverEntity {
    return new DriverEntity(
        m.ID,
        m.name,
        m.description,
        m.vehicle,
        m.comment,
        m.rating,
        m.km
    );
}

function toDriverModel(e: DriverEntity): DriverModel {
    return new DriverModel(
        e.ID,
        e.name,
        e.description,
        e.vehicle,
        e.comment,
        e.rating,
        e.km
    )
}

export { toDriverEntity, toDriverModel }