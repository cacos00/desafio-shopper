"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverModel = void 0;
const typeorm_1 = require("typeorm");
let DriverModel = class DriverModel {
    constructor(ID, name, description, vehicle, comment, rating, km) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.vehicle = vehicle;
        this.comment = comment;
        this.rating = rating;
        this.km = km;
    }
};
exports.DriverModel = DriverModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: 'id' })
], DriverModel.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, name: 'name' })
], DriverModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: false })
], DriverModel.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false })
], DriverModel.prototype, "vehicle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: false })
], DriverModel.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", precision: 10, scale: 2, nullable: false })
], DriverModel.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", precision: 10, scale: 2, nullable: false })
], DriverModel.prototype, "km", void 0);
exports.DriverModel = DriverModel = __decorate([
    (0, typeorm_1.Entity)({ schema: 'public', name: "drivers" })
], DriverModel);
