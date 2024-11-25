class DestinationEntity {
    public latitude: number
    public longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }
}

class ReviewType {
    public rating: number
    public comment: string

    constructor(rating: number, comment: string) {
        this.rating = rating
        this.comment = comment
    }
}

class OptionsEntity {
    public ID: number
    public name: string
    public description: string
    public vehicle: string
    public review: ReviewType
    public value: number

    constructor(ID: number, name: string, description: string, vehicle: string,
        review: ReviewType, value: number) {
        this.ID = ID
        this.name = name
        this.description = description
        this.vehicle = vehicle
        this.review = review
        this.value = value
    }
}

class RouteCalculationResponseEntity {
    public origin: DestinationEntity
    public destination: DestinationEntity
    public distanceMeters: number
    public duration: string
    public routeResponse: any

    constructor(origin: DestinationEntity, destination: DestinationEntity, distanceMeters: number,
        duration: string, routeResponse: any) {
        this.origin = origin
        this.destination = destination
        this.distanceMeters = distanceMeters
        this.duration = duration
        this.routeResponse = routeResponse
    }
}

export {
    DestinationEntity,
    OptionsEntity,
    RouteCalculationResponseEntity
}