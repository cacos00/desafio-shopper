"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTravelsByCustomerIDWrapper = void 0;
class ListTravelsByCustomerIDWrapper {
    constructor(customerID, driverID) {
        this.customerID = customerID;
        this.driverID = driverID;
    }
    getSQL() {
        return `
            SELECT 
              id, 
              customer_id as "customerID", 
              origin, 
              destination, 
              distance, 
              duration, 
              driver_id as "driverID", 
              driver_name as "driverName", 
              value, 
              date
            FROM public.travels as tv
            WHERE tv.customer_id = $1
            ${this.driverID ? 'AND tv.driver_id = $2' : ''}
        `;
    }
    getParameters() {
        return this.driverID ? [this.customerID, this.driverID] : [this.customerID];
    }
}
exports.ListTravelsByCustomerIDWrapper = ListTravelsByCustomerIDWrapper;
