"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelModel = void 0;
const typeorm_1 = require("typeorm");
let TravelModel = class TravelModel {
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
};
exports.TravelModel = TravelModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "numeric", name: 'ID' })
], TravelModel.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, name: 'customer_id' })
], TravelModel.prototype, "customerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: false, name: 'origin' })
], TravelModel.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: false, name: 'destination' })
], TravelModel.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: false, name: 'distance' })
], TravelModel.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: false, name: 'duration' })
], TravelModel.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", nullable: false, name: 'driver_id' })
], TravelModel.prototype, "driverID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: false, name: 'driver_name' })
], TravelModel.prototype, "driverName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", precision: 10, scale: 2, nullable: false, name: 'value' })
], TravelModel.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, update: false, name: 'date' })
], TravelModel.prototype, "date", void 0);
exports.TravelModel = TravelModel = __decorate([
    (0, typeorm_1.Entity)({ schema: "public", name: "travels" })
], TravelModel);
