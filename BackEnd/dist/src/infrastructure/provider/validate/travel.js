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
exports.ListTravelsByCustomerIDUseCaseValidate = exports.CreateTravelUseCaseValidate = void 0;
const drive_1 = require("../../internal/database/postgres/drive");
const validate_1 = require("./validate");
class CreateTravelUseCaseValidate {
    createTravel(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, validate_1.checkStringEmpty)(req.customerID)) {
                return 'É necessário informar o identificador do usuário';
            }
            if ((0, validate_1.checkStringEmpty)(req.destination)) {
                return 'É necessário informar o destino da viagem.';
            }
            if ((0, validate_1.checkStringEmpty)(req.origin)) {
                return 'É necessário informar o ponto de partida da viagem.';
            }
            if (req.origin.trim().toLowerCase() === req.destination.trim().toLowerCase()) {
                return 'Os endereços de origem e destino não podem ser iguais.';
            }
            if ((0, validate_1.checkStringEmpty)(req.driver.name)) {
                return 'É necessário informar o nome do motorista';
            }
            if ((0, validate_1.checkNumberEmpty)(req.driver.ID)) {
                return 'É necessário informar o identificador do motorista';
            }
            const driver = yield (0, drive_1.getDriverByID)(req.driver.ID);
            if (!driver) {
                return 'É necessário informar um motorista';
            }
            if (req.distance < driver.km) {
                return 'O motorista não aceita viagens com a quilometragem informada';
            }
            return null;
        });
    }
}
exports.CreateTravelUseCaseValidate = CreateTravelUseCaseValidate;
class ListTravelsByCustomerIDUseCaseValidate {
    listTravelsByCustomerID(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, validate_1.checkStringEmpty)(req.customerID)) {
                return 'É necessário informar o identificador do usuário';
            }
            if (req.driverID) {
                const driver = yield (0, drive_1.getDriverByID)(req.driverID);
                if (!driver)
                    return 'Não existe motorista para o identificador informado';
            }
            return null;
        });
    }
}
exports.ListTravelsByCustomerIDUseCaseValidate = ListTravelsByCustomerIDUseCaseValidate;
