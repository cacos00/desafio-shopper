"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRideEstimateUseCaseValidate = void 0;
const validate_1 = require("./validate");
class CalculateRideEstimateUseCaseValidate {
    calculateRideEstimate(req) {
        if ((0, validate_1.checkStringEmpty)(req.customerID)) {
            return 'É necessário informar o identificador do usuário';
        }
        if ((0, validate_1.checkStringEmpty)(req.destination)) {
            return 'É necessário informar o destino da viagem.';
        }
        if ((0, validate_1.checkStringEmpty)(req.origin)) {
            return 'É necessário informar o ponto de partida da viagem.';
        }
        return null;
    }
}
exports.CalculateRideEstimateUseCaseValidate = CalculateRideEstimateUseCaseValidate;
