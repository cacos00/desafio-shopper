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
exports.ListTravelsByCustomerIDController = exports.CreateTravelController = void 0;
const travel_1 = require("../../domain/usecase/travel");
const travel_2 = require("../../domain/usecase/ucio/travel");
const travel_3 = require("../../infrastructure/provider/repository/travel");
const travel_4 = require("../../infrastructure/provider/validate/travel");
const response_1 = require("../response/response");
class CreateTravelController {
    createTravel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { customerID, origin, destination, distance, duration, driver, value } = req.body;
            const ucReq = new travel_2.CreateTravelUseCaseRequest(customerID, origin, destination, distance, duration, driver, value);
            const validate = new travel_4.CreateTravelUseCaseValidate();
            const repository = new travel_3.CreateTravelUseCaseRepository();
            const usecase = new travel_1.CreateTravelUseCase(validate, repository);
            const ucRes = yield usecase.createTravel(ucReq);
            new response_1.SuccessResponse().success(res, ucRes);
        });
    }
}
exports.CreateTravelController = CreateTravelController;
class ListTravelsByCustomerIDController {
    listTravelsByCustomerID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { customerID, driverID } = req.body;
            const ucReq = new travel_2.ListTravelsByCustomerIDUseCaseRequest(customerID, driverID);
            const validate = new travel_4.ListTravelsByCustomerIDUseCaseValidate();
            const repository = new travel_3.ListTravelsByCustomerIDUseCaseRepository();
            const usecase = new travel_1.ListTravelsByCustomerIDUseCase(validate, repository);
            const ucRes = yield usecase.listTravelsByCustomerID(ucReq);
            new response_1.SuccessResponse().success(res, ucRes);
        });
    }
}
exports.ListTravelsByCustomerIDController = ListTravelsByCustomerIDController;
