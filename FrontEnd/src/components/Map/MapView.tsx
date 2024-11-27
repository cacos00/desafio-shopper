interface MapViewModalProps {
    mapUrl: string
}

function MapView(props: MapViewModalProps) {
    return (
        <div className="mb-2">
            <img src={props.mapUrl} alt="Rota" />
        </div>
    )
}

export {
    MapView
}