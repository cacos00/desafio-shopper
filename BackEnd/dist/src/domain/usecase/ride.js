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
exports.CalculateRideEstimateUseCase = void 0;
const geocoding_1 = require("../../infrastructure/internal/api/geocoding");
const parse_1 = require("../common/parse");
const error_1 = require("../entity/error");
const ride_1 = require("../entity/ride");
const ride_2 = require("./ucio/ride");
class CalculateRideEstimateUseCase {
    constructor(validate, repository) {
        this.validate = validate;
        this.repository = repository;
    }
    calculateRideEstimate(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageError = yield this.validate.calculateRideEstimate(req);
                if (messageError) {
                    console.log(`${error_1.TAG_PRE_CONDITION_ERROR} ${messageError}`);
                    return new ride_2.CalculateRideEstimateUseCaseResponse(null, null, null, new error_1.PreconditionError(messageError));
                }
                else {
                    const { customerID, origin, destination } = req;
                    let originCoodinates = yield (0, geocoding_1.getCoordinates)(origin);
                    let destinationCoodinates = yield (0, geocoding_1.getCoordinates)(destination);
                    const urlMapStatic = yield (0, geocoding_1.generateStaticMapUrl)(originCoodinates, destinationCoodinates);
                    const route = yield this.repository.routeCalculation(origin, destination);
                    let responseRoute = null;
                    if (route) {
                        responseRoute = new ride_1.RouteCalculationResponseEntity(originCoodinates, destinationCoodinates, route.distanceMeters, route.duration, route.routeResponse);
                    }
                    let distance = (0, parse_1.formatMetersByKm)(route.distanceMeters);
                    const drivers = yield this.repository.listDriversByKm(distance);
                    let options = [];
                    if (drivers) {
                        for (let index = 0; index < drivers.length; index++) {
                            const drive = drivers[index];
                            const review = {
                                rating: drive.rating,
                                comment: drive.comment
                            };
                            const value = distance * drive.rating;
                            const option = new ride_1.OptionsEntity(drive.ID, drive.name, drive.description, drive.vehicle, review, value);
                            options.push(option);
                        }
                    }
                    const responseRouteCalculation = Object.assign(Object.assign({}, route), { urlMapStatic });
                    return new ride_2.CalculateRideEstimateUseCaseResponse(responseRoute, options, responseRouteCalculation, null);
                }
            }
            catch (error) {
                console.log(error_1.TAG_INTERNAL_SERVER_ERROR, error);
                return new ride_2.CalculateRideEstimateUseCaseResponse(null, null, null, new error_1.InternalServerError(error.message));
            }
        });
    }
}
exports.CalculateRideEstimateUseCase = CalculateRideEstimateUseCase;
