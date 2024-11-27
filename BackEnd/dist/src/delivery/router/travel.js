"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelRouter = void 0;
const express_1 = require("express");
const travel_1 = require("../controller/travel");
class TravelRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.patch('/ride/confirm', new travel_1.CreateTravelController().createTravel);
        this.router.get('/ride', new travel_1.ListTravelsByCustomerIDController().listTravelsByCustomerID);
    }
    getRouter() {
        return this.router;
    }
}
exports.TravelRouter = TravelRouter;
