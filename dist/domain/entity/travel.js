"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelEntity = void 0;
class TravelEntity {
    constructor(ID, customerID, origin, destination, distance, duration, value) {
        this.ID = ID;
        this.customerID = customerID;
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
        this.value = value;
    }
}
exports.TravelEntity = TravelEntity;
