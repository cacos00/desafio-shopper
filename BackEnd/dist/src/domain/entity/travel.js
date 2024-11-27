"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelEntity = void 0;
class TravelEntity {
    constructor(ID, customerID, origin, destination, distance, duration, driverID, driverName, value, date) {
        this.ID = ID;
        this.customerID = customerID;
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
        this.driverID = driverID;
        this.driverName = driverName;
        this.value = value;
        this.date = date;
    }
}
exports.TravelEntity = TravelEntity;
