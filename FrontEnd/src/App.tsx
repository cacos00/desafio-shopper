import { useState } from 'react'
import './App.css'
import { EstimateRideView } from './components/EstimateRide/EstimateRideView'
import { StepTypeEnum } from './enum/step'
import { RideConfirmeRequestType, RideEstimateRequestType } from './components/EstimateRide/EstimateRideViewType'
import { serviceRequest } from './services/ServiceRequest'
import { ConfirmRideView } from './components/ConfirmRide/ConfirmRideView'
import { DriverType } from './components/ConfirmRide/ConfirmRideViewType'
import { ListRideView } from './components/ListRide/ListRideView'
import { RideType } from './components/ListRide/ListRideViewType'
import { REGEX_CPF_CNPJ } from './common/regex'

function App() {
  const [step, setStep] = useState<number>(StepTypeEnum.ESTIMATE)
  const [customerID, setCustomerID] = useState<string>('')
  const [drivers, setDrivers] = useState<DriverType[]>([])
  const [originAdress, setOriginAdress] = useState<string>('')
  const [destinationAdress, setDestinationAdress] = useState<string>('')
  const [distanceMeters, setDistanceMeters] = useState<number>()
  const [duration, setDuration] = useState<number>()
  const [mapUrl, setMapUrl] = useState<string>('')
  const [encodedPolyline, setEncodedPolyline] = useState<string>('')
  const [rides, setRides] = useState<RideType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<string>('')

  function validateEstimateRide(formData: RideEstimateRequestType): string | null {
    if (formData && !REGEX_CPF_CNPJ.test(formData.customerID)) return 'Informe um CPF válido'

    return null
  }

  function validateFetchRide(customerID: string): string | null {
    if (customerID && !REGEX_CPF_CNPJ.test(customerID)) return 'Informe um CPF válido'

    return null
  }

  async function fetchEstimateRide(e: React.FormEvent<HTMLButtonElement>, formData: RideEstimateRequestType | null): Promise<void> {
    e.preventDefault()
    setAlert('')
    setIsLoading(true)

    if (formData) {
      const messageError = validateEstimateRide(formData)

      if (messageError) {
        setAlert(messageError)
      } else {
        const estimate = await serviceRequest.rideEstimate(formData)

        if (estimate.error) {
          setAlert(estimate.error.message)
        } else {
          setCustomerID(formData.customerID)
          setOriginAdress(formData.origin)
          setDestinationAdress(formData.destination)
          setDrivers(estimate.options)
          setDistanceMeters(estimate.calculateRide.distanceMeters)
          setDuration(estimate.calculateRide.duration)
          setEncodedPolyline(estimate.routeResponse.polyline.encodedPolyline)
          setMapUrl(estimate.routeResponse.urlMapStatic)

          setStep(StepTypeEnum.CONFIRM)
        }
      }
    }
    setIsLoading(false)
  }

  async function handleOnClickRideConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, driver: DriverType): Promise<void> {
    e.preventDefault()
    setAlert('')
    setIsLoading(true)

    const formatedDriver = {
      ID: driver.ID,
      name: driver.name
    }

    const data: RideConfirmeRequestType = {
      customerID,
      origin: originAdress,
      destination: destinationAdress,
      distance: distanceMeters as number,
      duration: duration as number,
      driver: formatedDriver,
      value: driver.value
    }

    const res = await serviceRequest.rideConfirm(data)

    if (res.error) {
      setAlert(res.error.message)
    } else {
      const data = await serviceRequest.listTravelsByCustomer(customerID)
      setRides(data.rides)
      setStep(StepTypeEnum.LIST)
    }

    setIsLoading(false)
  }

  async function handleOnClickFetchRides(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, customerID: string, driverID?: number): Promise<void> {
    e.preventDefault()
    setAlert('')
    let res = null

    const messageError = validateFetchRide(customerID)

    if (messageError) {
      setAlert(messageError)
    } else {
      if (customerID) {
        if (driverID && driverID !== 0) {
          res = await serviceRequest.listTravelsByCustomer(customerID, driverID)
        } else {
          res = await serviceRequest.listTravelsByCustomer(customerID)
        }

        if (res.error) {
          setAlert(res.error.message)
        } else {
          setRides(res.rides)
        }
      } else {
        setAlert('É necessário informar o CPF do usuário')
      }
    }
  }

  function handleOnClickRedirect(): void {
    setStep(StepTypeEnum.ESTIMATE)
  }

  return isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  ) : (
    <div>
      <div className="position-relative mb-5">
        <div className="progress" style={{ height: 1 }}>
          <div className="progress-bar" role="progressbar" style={{ width: `${step === StepTypeEnum.ESTIMATE ? '0%' : step === StepTypeEnum.CONFIRM ? '50%' : '100%'}` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <button type="button" className={`position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill`} style={{ width: '2rem', height: '2rem' }}>1</button>
        <button type="button" className={`position-absolute top-0 start-50 translate-middle btn btn-sm ${step === StepTypeEnum.ESTIMATE ? 'btn-secondary' : 'btn-primary'} rounded-pill`} style={{ width: '2rem', height: '2rem' }}>2</button>
        <button type="button" className={`position-absolute top-0 start-100 translate-middle btn btn-sm ${step === StepTypeEnum.LIST ? 'btn-primary' : 'btn-secondary'} rounded-pill`} style={{ width: '2rem', height: '2rem' }}>3</button>
      </div>
      {alert &&
        <div className="alert alert-warning" role="alert">
          {alert}
        </div>
      }
      <div className="mt-4">
        {step === StepTypeEnum.ESTIMATE &&
          <EstimateRideView
            handleOnClickRideEstimate={fetchEstimateRide}
          />
        }
        {step === StepTypeEnum.CONFIRM &&
          <ConfirmRideView
            drivers={drivers}
            handleOnClickRideConfirm={handleOnClickRideConfirm}
            handleOnClickRedirect={handleOnClickRedirect}
            isLoading={isLoading}
            mapUrl={mapUrl}
          />
        }
        {step === StepTypeEnum.LIST &&
          <ListRideView
            rides={rides}
            isLoading={isLoading}
            handleOnclickFetchRides={handleOnClickFetchRides}
            handleOnClickRedirect={handleOnClickRedirect}
          />
        }
      </div>
    </div>
  )
}

export default App
