"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTravelsByCustomerIDUseCaseResponse = exports.ListTravelsByCustomerIDUseCaseRequest = exports.CreateTravelUseCaseResponse = exports.CreateTravelUseCaseRequest = void 0;
class CreateTravelUseCaseRequest {
    constructor(customerID, origin, destination, distance, duration, driver, value) {
        this.customerID = customerID;
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
        this.driver = driver;
        this.value = value;
    }
}
exports.CreateTravelUseCaseRequest = CreateTravelUseCaseRequest;
class CreateTravelUseCaseResponse {
    constructor(success, error) {
        this.success = success;
        this.error = error;
    }
}
exports.CreateTravelUseCaseResponse = CreateTravelUseCaseResponse;
class ListTravelsByCustomerIDUseCaseRequest {
    constructor(customerID, driverID) {
        this.customerID = customerID;
        this.driverID = driverID;
    }
}
exports.ListTravelsByCustomerIDUseCaseRequest = ListTravelsByCustomerIDUseCaseRequest;
class ListTravelsByCustomerIDUseCaseResponse {
    constructor(customerID, rides, error) {
        this.customerID = customerID;
        this.rides = rides;
        this.error = error;
    }
}
exports.ListTravelsByCustomerIDUseCaseResponse = ListTravelsByCustomerIDUseCaseResponse;
