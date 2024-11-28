"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRideEstimateUseCaseValidate = void 0;
const geocoding_1 = require("../../internal/api/geocoding");
const validate_1 = require("./validate");
class CalculateRideEstimateUseCaseValidate {
    calculateRideEstimate(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, validate_1.checkStringEmpty)(req.customerID)) {
                return 'É necessário informar o seu CPF';
            }
            if ((0, validate_1.checkStringEmpty)(req.destination)) {
                return 'É necessário informar o destino da viagem.';
            }
            if ((0, validate_1.checkStringEmpty)(req.origin)) {
                return 'É necessário informar o ponto de partida da viagem.';
            }
            const isOriginValid = yield (0, geocoding_1.getCoordinates)(req.origin);
            if (!isOriginValid) {
                return 'O endereço de origem informado não é válido.';
            }
            const isDestinationValid = yield (0, geocoding_1.getCoordinates)(req.destination);
            if (!isDestinationValid) {
                return 'O endereço de destino informado não é válido.';
            }
            if (req.origin.trim().toLowerCase() === req.destination.trim().toLowerCase()) {
                return 'Os endereços de origem e destino não podem ser iguais.';
            }
            return null;
        });
    }
}
exports.CalculateRideEstimateUseCaseValidate = CalculateRideEstimateUseCaseValidate;
