class ListDriversByKmWrapper {
    public km: number

    constructor(km: number) {
        this.km = km
    }

    getSQL() {
        return `
      SELECT *
      FROM public.drivers as dr
      WHERE dr.km <= $1
      `
    }

    getParameters(): Array<any> {
        return [
            this.km
        ]
    }
}

export {
    ListDriversByKmWrapper
}