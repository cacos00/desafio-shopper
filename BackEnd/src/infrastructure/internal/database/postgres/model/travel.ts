import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: "public", name: "travels" })
class TravelModel {
  @PrimaryGeneratedColumn({ type: "numeric",  name: 'ID' })
  public ID: number | null

  @Column({ type: "varchar", length: 255, nullable: false, name: 'customer_id' })
  public customerID: string

  @Column({ type: "text", nullable: false, name: 'origin' })
  public origin: string

  @Column({ type: "text", nullable: false, name: 'destination' })
  public destination: string

  @Column({ type: "numeric", nullable: false, name: 'distance' })
  public distance: number

  @Column({ type: "varchar", length: 50, nullable: false, name: 'duration' })
  public duration: string

  @Column({ type: "integer", nullable: false, name: 'driver_id' })
  public driverID: number

  @Column({ type: "varchar", length: 50, nullable: false, name: 'driver_name' })
  public driverName: string

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false, name: 'value' })
  public value: number

  @Column({ type: 'timestamp', nullable: true, update: false, name: 'date' })
  public date: Date

  constructor(ID: number | null, customerID: string, origin: string, destination: string,
    distance: number, duration: string, driverID: number, driverName: string, value: number,
    date: Date) {
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

export { TravelModel }