import express from 'express'
import { CalculateRideEstimateRouter } from './ride'

class Router {
    constructor(app: express.Router) {
        app.use(new CalculateRideEstimateRouter().getRouter())
    }
}

export {
    Router
}