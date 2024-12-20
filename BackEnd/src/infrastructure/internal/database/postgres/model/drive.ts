import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public', name: "drivers" })
class DriverModel {
    @PrimaryGeneratedColumn({ type: "int", name: 'id' })
    public ID: number

    @Column({ type: "varchar", length: 255, nullable: false, name: 'name' })
    public name: string

    @Column({ type: "text", nullable: false })
    public description: string

    @Column({ type: "varchar", length: 255, nullable: false })
    public vehicle: string

    @Column({ type: "text", nullable: false })
    public comment: string

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
    public rating: number

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
    public km: number

    constructor(ID: number, name: string, description: string, vehicle: string,
        comment: string, rating: number, km: number) {
        this.ID = ID
        this.name = name
        this.description = description
        this.vehicle = vehicle
        this.comment = comment
        this.rating = rating
        this.km = km
    }
}

export {
    DriverModel
}