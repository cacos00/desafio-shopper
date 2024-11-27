type RideEstimateRequestType = {
    customerID: string
    origin: string
    destination: string
}

type DriverType = {
   ID: number
   name: string
}

type RideConfirmeRequestType = {
    customerID: string
    origin: string
    destination: string
    distance: number
    duration: number
    driver: DriverType
    value: number
}

type LocalizationType = {
    lat: number
    lng: number
}

export type {
    RideEstimateRequestType,
    RideConfirmeRequestType,
    LocalizationType
}