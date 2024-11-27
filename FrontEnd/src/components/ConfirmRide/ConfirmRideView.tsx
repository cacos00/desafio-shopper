import { MapView } from "../Map/MapView"
import { DriverType } from "./ConfirmRideViewType"

interface ConfirmRideViewModalProps {
    drivers: DriverType[]
    handleOnClickRideConfirm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, driver: DriverType) => void
    handleOnClickRedirect: () => void
    isLoading: boolean
    mapUrl: string
}

function ConfirmRideView(props: ConfirmRideViewModalProps) {

    function handleOnClickRideConfirmByDriver(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, driver: DriverType): void {
        e.preventDefault()

        props.handleOnClickRideConfirm(e, driver)
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
                    <h4>Confirmar Viagem</h4>
                </div>
                <div className="col-1 d-md-flex justify-content-md-end">
                    <button onClick={(e) => handleOnClickRedirect(e)} type="button" className="btn btn-outline-dark">Voltar</button>
                </div>
            </div>
            <MapView mapUrl={props.mapUrl} />
            {props.drivers.length === 0 &&
                <div className="alert alert-warning" role="alert">
                    Não existem motoristas disponíveis para esta corrida
                </div>
            }
            {props.drivers.map((driver: DriverType) => (
                <div className="list-group mb-3" key={driver.ID}>
                    <div
                        className="list-group-item shadow-sm border rounded p-3 position-relative"
                        style={{ backgroundColor: '#f9f9f9' }}
                    >
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <h5 className="mb-1 text-secondary">Nome: {driver.name}</h5>
                            <span className="badge bg-success fs-6">Valor: R$ {driver.value.toFixed(2)}</span>
                        </div>
                        <hr className="my-2" />
                        <p className="mb-2 text-muted">Descrição: {driver.description}</p>
                        <p className="mb-2 text-warning fw-bold">Avaliação: {driver.review.comment}</p>
                        <small className="text-secondary">Veículo: {driver.vehicle}</small>
                        <button
                            className="btn btn-primary position-absolute"
                            style={{ bottom: '10px', right: '10px' }}
                            onClick={(e) => handleOnClickRideConfirmByDriver(e, driver)}
                        >
                            Selecionar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {
    ConfirmRideView
}