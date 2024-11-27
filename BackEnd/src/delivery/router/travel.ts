import { Router } from "express"
import { CreateTravelController, ListTravelsByCustomerIDController } from "../controller/travel"

class TravelRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.patch('/ride/confirm', new CreateTravelController().createTravel)
        this.router.get('/ride/:customerID', new ListTravelsByCustomerIDController().listTravelsByCustomerID)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    TravelRouter
}