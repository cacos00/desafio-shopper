import { useState } from "react"
import { parseDatetoYYYYMMDDHHMISS, parseMetersToKm } from "../../common/parse"
import { RideType } from "./ListRideViewType"

interface ListRideViewModalProps {
    rides: RideType[]
    isLoading: boolean
    handleOnclickFetchRides: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, customerID: string, driverID?: number) => void
    handleOnClickRedirect: () => void
}

function ListRideView(props: ListRideViewModalProps) {
    const [customerID, setCustomerID] = useState<string>("")
    const [driverID, setDriverID] = useState<number>(0)

    async function handleFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, customerID: string, driverID: number) {
        props.handleOnclickFetchRides(e, customerID, driverID)
    }

    function handleOnChangeCustomer(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()

        const costumerID = e.target.value

        setCustomerID(costumerID)
    }

    function handleOnChangeDriver(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault()

        const driverID = Number(e.target.value)

        setDriverID(driverID)
    }

    function handleOnClickRedirect(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault()

        props.handleOnClickRedirect()
    }

    return props.isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (
        <div>
            <div className="row mb-5 ps-5">
                <div className="col-11 ps-5">
                    <h4>Histórico de Viagens</h4>
                </div>
                <div className="col-1 d-md-flex justify-content-md-end">
                    <button onClick={(e) => handleOnClickRedirect(e)} type="button" className="btn btn-outline-dark">Voltar</button>
                </div>
            </div>
            <div className="d-flex mb-4 align-items-center">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="CPF do Usuário"
                    value={customerID}
                    onChange={(e) => handleOnChangeCustomer(e)}
                />
                <select
                    className="form-select me-2"
                    value={driverID}
                    onChange={(e) => handleOnChangeDriver(e)}
                >
                    <option value={0}>Mostrar Todos</option>
                    <option value={1}>Homer Simpson</option>
                    <option value={2}>Dominic Toretto</option>
                    <option value={3}>James Bond</option>
                </select>
                <button
                    className="btn btn-primary"
                    onClick={(e) => handleFilter(e, customerID, driverID)}
                >
                    Filtrar
                </button>
            </div>
            <div className="table">
                <table className="table table-striped">
                    <thead className="bg-secondary">
                        <tr>
                            <th className="border-0 rounded-end-0 ps-4 py-2 text-body-secondary">Data/Hora</th>
                            <th className="border-0 py-2 text-body-secondary text-center">Nome</th>
                            <th className="border-0 py-2 text-body-secondary text-center">Origem</th>
                            <th className="border-0 py-2 text-body-secondary text-center">Destino</th>
                            <th className="border-0 py-2 text-body-secondary text-center">Distância</th>
                            <th className="border-0 py-2 text-body-secondary text-center">Tempo</th>
                            <th className="border-0 rounded-start-0 py-2 text-body-secondary text-center">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.rides.map((ride: RideType) => (
                                <tr>
                                    <td className="">{parseDatetoYYYYMMDDHHMISS(ride.date)}</td>
                                    <td className="">{ride.driverName}</td>
                                    <td className="">{ride.origin}</td>
                                    <td className="">{ride.destination}</td>
                                    <td className="">{parseMetersToKm(ride.distance)} km</td>
                                    <td className="">{ride.duration}</td>
                                    <td className="">R$ {ride.value}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export {
    ListRideView
}