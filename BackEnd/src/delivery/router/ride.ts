import { Router } from "express"
import { CalculateRideEstimateController } from "../controller/ride"

class RideRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('/ride/estimate', new CalculateRideEstimateController().calculateRideEstimate)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    RideRouter
}