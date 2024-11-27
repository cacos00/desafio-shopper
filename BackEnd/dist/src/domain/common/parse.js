"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMetersByKm = formatMetersByKm;
function formatMetersByKm(value) {
    const metersByKm = value / 1000;
    return parseFloat(metersByKm.toFixed(2));
}
