"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRideEstimateUseCaseResponse = exports.CalculateRideEstimateUseCaseRequest = void 0;
class CalculateRideEstimateUseCaseRequest {
    constructor(customerID, origin, destination) {
        this.customerID = customerID;
        this.origin = origin;
        this.destination = destination;
    }
}
exports.CalculateRideEstimateUseCaseRequest = CalculateRideEstimateUseCaseRequest;
class CalculateRideEstimateUseCaseResponse {
    constructor(calculateRide, options, routeResponse, error) {
        this.calculateRide = calculateRide;
        this.options = options;
        this.routeResponse = routeResponse;
        this.error = error;
    }
}
exports.CalculateRideEstimateUseCaseResponse = CalculateRideEstimateUseCaseResponse;
