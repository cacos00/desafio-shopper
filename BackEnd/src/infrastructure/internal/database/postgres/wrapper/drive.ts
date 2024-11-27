class ListDriversByKmWrapper {
    public km: number

    constructor(km: number) {
        this.km = km
    }

    getSQL() {
        return `
            SELECT 
              id as "ID", 
              name, 
              description, 
              vehicle, 
              comment, 
              rating, 
              km
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