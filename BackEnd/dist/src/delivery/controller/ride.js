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
exports.CalculateRideEstimateController = void 0;
const ride_1 = require("../../domain/usecase/ucio/ride");
const ride_2 = require("../../domain/usecase/ride");
const ride_3 = require("../../infrastructure/provider/repository/ride");
const ride_4 = require("../../infrastructure/provider/validate/ride");
const response_1 = require("../response/response");
class CalculateRideEstimateController {
    calculateRideEstimate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { customerID, origin, destination } = req.body;
            const ucReq = new ride_1.CalculateRideEstimateUseCaseRequest(customerID, origin, destination);
            const validate = new ride_4.CalculateRideEstimateUseCaseValidate();
            const repository = new ride_3.CalculateRideEstimateUseCaseRepository();
            const usecase = new ride_2.CalculateRideEstimateUseCase(validate, repository);
            const ucRes = yield usecase.calculateRideEstimate(ucReq);
            new response_1.SuccessResponse().success(res, ucRes);
        });
    }
}
exports.CalculateRideEstimateController = CalculateRideEstimateController;
