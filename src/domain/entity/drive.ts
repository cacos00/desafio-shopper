class DriverEntity {
    public ID: number
    public name: string
    public description: string
    public vehicle: string
    public comment: string
    public rating: number
    public km: string

    constructor(ID: number, name: string, description: string, vehicle: string,
        comment: string, rating: number, km: string
    ) {
        this.ID = ID
        this.name = name
        this.description = description
        this.vehicle = vehicle
        this.comment = comment
        this.rating = rating
        this.km = km
    }
}

export { DriverEntity }