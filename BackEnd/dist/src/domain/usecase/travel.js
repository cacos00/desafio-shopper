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
exports.ListTravelsByCustomerIDUseCase = exports.CreateTravelUseCase = void 0;
const error_1 = require("../entity/error");
const travel_1 = require("../entity/travel");
const travel_2 = require("./ucio/travel");
class CreateTravelUseCase {
    constructor(validate, repository) {
        this.validate = validate;
        this.repository = repository;
    }
    createTravel(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageError = yield this.validate.createTravel(req);
                if (messageError) {
                    console.log(`${error_1.TAG_PRE_CONDITION_ERROR} ${messageError}`);
                    return new travel_2.CreateTravelUseCaseResponse(null, new error_1.PreconditionError(messageError));
                }
                else {
                    const now = new Date();
                    const travelEntity = new travel_1.TravelEntity(null, req.customerID, req.origin, req.destination, req.distance, req.duration, req.driver.ID, req.driver.name, req.value, now);
                    const success = yield this.repository.createTravel(travelEntity);
                    if (success) {
                        return new travel_2.CreateTravelUseCaseResponse(true, null);
                    }
                    else {
                        return new travel_2.CreateTravelUseCaseResponse(false, null);
                    }
                }
            }
            catch (error) {
                console.log(error_1.TAG_INTERNAL_SERVER_ERROR, error);
                return new travel_2.CreateTravelUseCaseResponse(null, new error_1.InternalServerError(error.message));
            }
        });
    }
}
exports.CreateTravelUseCase = CreateTravelUseCase;
class ListTravelsByCustomerIDUseCase {
    constructor(validate, repository) {
        this.validate = validate;
        this.repository = repository;
    }
    listTravelsByCustomerID(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageError = yield this.validate.listTravelsByCustomerID(req);
                if (messageError) {
                    console.log(`${error_1.TAG_PRE_CONDITION_ERROR} ${messageError}`);
                    return new travel_2.ListTravelsByCustomerIDUseCaseResponse(null, null, new error_1.PreconditionError(messageError));
                }
                else {
                    const { customerID, driverID } = req;
                    const travels = yield this.repository.listTravelsByCustomerID(customerID, driverID);
                    return new travel_2.ListTravelsByCustomerIDUseCaseResponse(customerID, travels, null);
                }
            }
            catch (error) {
                console.log(error_1.TAG_INTERNAL_SERVER_ERROR, error);
                return new travel_2.ListTravelsByCustomerIDUseCaseResponse(null, null, new error_1.InternalServerError(error.message));
            }
        });
    }
}
exports.ListTravelsByCustomerIDUseCase = ListTravelsByCustomerIDUseCase;
