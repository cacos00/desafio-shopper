import { TravelEntity } from "../../../../../domain/entity/travel"
import { TravelModel } from "../model/travel"

function toTravelEntity(model: TravelModel): TravelEntity {
    return new TravelEntity(
        model.ID,
        model.customerID,
        model.origin,
        model.destination,
        model.distance,
        model.duration,
        model.driverID,
        model.driverName,
        model.value,
        model.date
    )
}

function toTravelModel(entity: TravelEntity): TravelModel {
    return new TravelModel(
        entity.ID,
        entity.customerID,
        entity.origin,
        entity.destination,
        entity.distance,
        entity.duration,
        entity.driverID,
        entity.driverName,
        entity.value,
        entity.date
    )
}

export { toTravelEntity, toTravelModel }