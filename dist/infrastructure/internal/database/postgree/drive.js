"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDriversByKm = listDriversByKm;
const connection_1 = require("./connection");
const drive_1 = require("./model/drive");
const drive_2 = require("./trasnformer/drive");
function listDriversByKm(km) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = yield connection_1.Connection.getRepository(drive_1.DriverModel);
        const result = yield repository
            .createQueryBuilder("driver")
            .where("driver.km >= :km", { km })
            .getMany();
        return result ? result.map((driver) => (0, drive_2.toDriverEntity)(driver)) : [];
    });
}
