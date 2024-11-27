import moment from "moment"

function parseDatetoYYYYMMDDHHMISS(date: string): string {
    const formatedDate = new Date(date)
    return moment(formatedDate).format('DD-MM-YYYY hh:mm:ss')
}

function parseMetersToKm(meters: number) {
    return meters / 1000
}

export {
    parseDatetoYYYYMMDDHHMISS,
    parseMetersToKm
}