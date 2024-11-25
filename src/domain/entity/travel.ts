class TravelEntity {
    public ID: number
    public customerID: string
    public origin: string
    public destination: string
    public distance: number
    public duration: string
    public value: number

    constructor(
        ID: number,
        customerID: string,
        origin: string,
        destination: string,
        distance: number,
        duration: string,
        value: number
    ) {
        this.ID = ID
        this.customerID = customerID
        this.origin = origin
        this.destination = destination
        this.distance = distance
        this.duration = duration
        this.value = value
    }
}

export { TravelEntity }