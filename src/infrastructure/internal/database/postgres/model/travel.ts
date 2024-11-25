import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: "public", name: "travels" })
class TravelModel {
  @PrimaryGeneratedColumn({ type: "numeric", name: 'ID' })
  public ID: number

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

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false, name: 'value' })
  public value: number

  constructor(ID: number, customerID: string, origin: string, destination: string,
    distance: number, duration: string, value: number) {
    this.ID = ID
    this.customerID = customerID
    this.origin = origin
    this.destination = destination
    this.distance = distance
    this.duration = duration
    this.value = value
  }
}

export { TravelModel }