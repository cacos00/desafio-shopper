import { ChangeEvent, useState } from "react"
import { RideEstimateRequestType } from "./EstimateRideViewType"

interface EstimateRideViewModalProps {
    handleOnClickRideEstimate: (e: React.FormEvent<HTMLButtonElement>, formData: RideEstimateRequestType | null) => void
}

function EstimateRideView(props: EstimateRideViewModalProps) {
    const [customerID, setCustomerID] = useState<string>('')
    const [origin, setOrigin] = useState<string>('')
    const [destination, setDestination] = useState<string>('')

    async function handleOnClickRideEstimate(e: React.FormEvent<HTMLButtonElement>): Promise<void> {
        e.preventDefault()

        const formData = {
            customerID,
            origin,
            destination
        }

        props.handleOnClickRideEstimate(e, formData)
    }

    function handleOnChangeCustomer(e: ChangeEvent<HTMLInputElement>): void {
        e.preventDefault()

        setCustomerID(e.target.value)
    }

    function handleOnChangeOrigin(e: ChangeEvent<HTMLInputElement>): void {
        e.preventDefault()

        setOrigin(e.target.value)
    }

    function handleOnChangeDestination(e: ChangeEvent<HTMLInputElement>): void {
        e.preventDefault()

        setDestination(e.target.value)
    }

    return (
        <div>
            <h4>Estimativa de Viagem</h4>
            <div>
                <form className="row">
                    <div className="form-floating mb-3 col-12">
                        <input type="text" className="form-control" id="inputCustomerID" placeholder="Informe seu CPF" onChange={(e) => handleOnChangeCustomer(e)} />
                        <label className="ps-3" htmlFor="inputCustomerID">CPF</label>
                    </div>
                    <div className="row d-flex">
                        <div className="form-floating mb-3 col">
                            <input type="text" className="form-control" id="inputOriginAddress" placeholder="Origem" onChange={(e) => handleOnChangeOrigin(e)} />
                            <label className="ps-3" htmlFor="inputOriginAddress">Origem</label>
                        </div>
                        <div className="form-floating mb-3 col">
                            <input type="text" className="form-control" id="inputDestinationAddress" placeholder="Destino" onChange={(e) => handleOnChangeDestination(e)} />
                            <label className="ps-3" htmlFor="inputDestinationAddress">Destino</label>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <button onClick={(e) => handleOnClickRideEstimate(e)} type="button" className="btn btn-primary">Estimar Viagem</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {
    EstimateRideView
}