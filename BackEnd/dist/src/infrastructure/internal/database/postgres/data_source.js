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
exports.getDataSource = getDataSource;
const typeorm_1 = require("typeorm");
const drive_1 = require("./model/drive");
const travel_1 = require("./model/travel");
class DataSourceBuilder {
    static builderDatasource() {
        return __awaiter(this, void 0, void 0, function* () {
            return new typeorm_1.DataSource({
                type: 'postgres',
                url: process.env.POSTGRESQL_URI,
                synchronize: false,
                entities: [
                    drive_1.DriverModel,
                    travel_1.TravelModel
                ]
            });
        });
    }
}
let dataSource;
function getDataSource() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dataSource) {
            dataSource = yield DataSourceBuilder.builderDatasource();
        }
        return dataSource;
    });
}
