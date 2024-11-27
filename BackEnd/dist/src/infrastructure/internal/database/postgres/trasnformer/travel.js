"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTravelEntity = toTravelEntity;
exports.toTravelModel = toTravelModel;
const travel_1 = require("../../../../../domain/entity/travel");
const travel_2 = require("../model/travel");
function toTravelEntity(model) {
    return new travel_1.TravelEntity(model.ID, model.customerID, model.origin, model.destination, model.distance, model.duration, model.driverID, model.driverName, model.value, model.date);
}
function toTravelModel(entity) {
    return new travel_2.TravelModel(entity.ID, entity.customerID, entity.origin, entity.destination, entity.distance, entity.duration, entity.driverID, entity.driverName, entity.value, entity.date);
}
