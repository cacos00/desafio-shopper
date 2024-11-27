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
exports.createTravel = createTravel;
exports.listTravelsByCustomerID = listTravelsByCustomerID;
const connection_1 = require("./connection");
const travel_1 = require("./model/travel");
const travel_2 = require("./trasnformer/travel");
const travel_3 = require("./wrapper/travel");
function createTravel(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = (0, travel_2.toTravelModel)(e);
        const repository = yield connection_1.Connection.getRepository(travel_1.TravelModel);
        const res = yield repository.createQueryBuilder()
            .insert()
            .into(travel_1.TravelModel)
            .values([model])
            .returning('*')
            .execute();
        const [row] = res.raw;
        0;
        return (0, travel_2.toTravelEntity)(row);
    });
}
function listTravelsByCustomerID(customerID, driverID) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = yield connection_1.Connection.getRepository(travel_1.TravelModel);
        const wrapper = new travel_3.ListTravelsByCustomerIDWrapper(customerID, driverID);
        const result = yield repository.query(wrapper.getSQL(), wrapper.getParameters());
        return result ? result.map((el) => (0, travel_2.toTravelEntity)(el)) : [];
    });
}
