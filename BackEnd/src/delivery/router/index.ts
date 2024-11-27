import express from 'express'
import { RideRouter } from './ride'
import { TravelRouter } from './travel'
import { CorsRouter } from './cors'

class Router {
    constructor(app: express.Router) {
        app.use(new CorsRouter().getRouter())
        app.use(new RideRouter().getRouter())
        app.use(new TravelRouter().getRouter())
    }
}

export {
    Router
}