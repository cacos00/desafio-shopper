"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const ride_1 = require("./ride");
class Router {
    constructor(app) {
        app.use(new ride_1.CalculateRideEstimateRouter().getRouter());
    }
}
exports.Router = Router;
