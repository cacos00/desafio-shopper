"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCalculationResponseEntity = exports.OptionsEntity = exports.DestinationEntity = void 0;
class DestinationEntity {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
exports.DestinationEntity = DestinationEntity;
class ReviewType {
    constructor(rating, comment) {
        this.rating = rating;
        this.comment = comment;
    }
}
class OptionsEntity {
    constructor(ID, name, description, vehicle, review, value) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.vehicle = vehicle;
        this.review = review;
        this.value = value;
    }
}
exports.OptionsEntity = OptionsEntity;
class RouteCalculationResponseEntity {
    constructor(origin, destination, distanceMeters, duration, routeResponse) {
        this.origin = origin;
        this.destination = destination;
        this.distanceMeters = distanceMeters;
        this.duration = duration;
        this.routeResponse = routeResponse;
    }
}
exports.RouteCalculationResponseEntity = RouteCalculationResponseEntity;
