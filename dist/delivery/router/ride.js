"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRideEstimateRouter = void 0;
const express_1 = require("express");
const ride_1 = require("../controller/ride");
class CalculateRideEstimateRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.post('/ride/estimate', new ride_1.CalculateRideEstimateController().calculateRideEstimate);
    }
    getRouter() {
        return this.router;
    }
}
exports.CalculateRideEstimateRouter = CalculateRideEstimateRouter;
