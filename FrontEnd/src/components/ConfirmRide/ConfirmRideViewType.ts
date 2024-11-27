type ReviewType = {
    rating: number
    comment: string
}

type DriverType = {
    ID: number
    name: string
    description: string
    vehicle: string
    review: ReviewType
    value: number
}

export type {
    DriverType
}