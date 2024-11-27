"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const ride_1 = require("./ride");
const travel_1 = require("./travel");
class Router {
    constructor(app) {
        app.use(new ride_1.RideRouter().getRouter());
        app.use(new travel_1.TravelRouter().getRouter());
    }
}
exports.Router = Router;
