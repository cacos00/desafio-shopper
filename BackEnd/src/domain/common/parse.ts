function formatMetersByKm(value: number): number {
    const metersByKm = value / 1000
    return parseFloat(metersByKm.toFixed(2))
}

export {
    formatMetersByKm
}