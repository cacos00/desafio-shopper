"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDriversByKmWrapper = void 0;
class ListDriversByKmWrapper {
    constructor(km) {
        this.km = km;
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
        `;
    }
    getParameters() {
        return [
            this.km
        ];
    }
}
exports.ListDriversByKmWrapper = ListDriversByKmWrapper;
