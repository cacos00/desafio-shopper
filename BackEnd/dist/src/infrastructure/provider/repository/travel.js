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
exports.ListTravelsByCustomerIDUseCaseRepository = exports.CreateTravelUseCaseRepository = void 0;
const travel_1 = require("../../internal/database/postgres/travel");
class CreateTravelUseCaseRepository {
    createTravel(travel) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, travel_1.createTravel)(travel);
        });
    }
}
exports.CreateTravelUseCaseRepository = CreateTravelUseCaseRepository;
class ListTravelsByCustomerIDUseCaseRepository {
    listTravelsByCustomerID(customerID, driverID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, travel_1.listTravelsByCustomerID)(customerID, driverID);
        });
    }
}
exports.ListTravelsByCustomerIDUseCaseRepository = ListTravelsByCustomerIDUseCaseRepository;
