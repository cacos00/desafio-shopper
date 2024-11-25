"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverEntity = void 0;
class DriverEntity {
    constructor(ID, name, description, vehicle, comment, rating, km) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.vehicle = vehicle;
        this.comment = comment;
        this.rating = rating;
        this.km = km;
    }
}
exports.DriverEntity = DriverEntity;
