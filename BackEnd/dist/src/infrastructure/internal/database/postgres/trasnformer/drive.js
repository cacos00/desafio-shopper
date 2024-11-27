"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDriverEntity = toDriverEntity;
exports.toDriverModel = toDriverModel;
const drive_1 = require("../../../../../domain/entity/drive");
const drive_2 = require("../model/drive");
function toDriverEntity(m) {
    return new drive_1.DriverEntity(m.ID, m.name, m.description, m.vehicle, m.comment, m.rating, m.km);
}
function toDriverModel(e) {
    return new drive_2.DriverModel(e.ID, e.name, e.description, e.vehicle, e.comment, e.rating, e.km);
}
