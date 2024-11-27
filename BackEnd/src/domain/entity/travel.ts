class TravelEntity {
    public ID: number | null
    public customerID: string
    public origin: string
    public destination: string
    public distance: number
    public duration: string
    public driverID: number
    public driverName: string
    public value: number
    public date: Date

    constructor(
        ID: number | null,
        customerID: string,
        origin: string,
        destination: string,
        distance: number,
        duration: string,
        driverID: number,
        driverName: string,
        value: number,
        date: Date
    ) {
        this.ID = ID
        this.customerID = customerID
        this.origin = origin
        this.destination = destination
        this.distance = distance
        this.duration = duration
        this.driverID = driverID
        this.driverName = driverName
        this.value = value
        this.date = date
    }
}

export { TravelEntity }