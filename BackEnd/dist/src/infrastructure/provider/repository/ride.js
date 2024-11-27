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
exports.CalculateRideEstimateUseCaseRepository = void 0;
const route_1 = require("../../internal/api/route");
const drive_1 = require("../../internal/database/postgres/drive");
class CalculateRideEstimateUseCaseRepository {
    routeCalculation(origin, destination) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, route_1.computeRoutes)(origin, destination);
        });
    }
    listDriversByKm(Km) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, drive_1.listDriversByKm)(Km);
        });
    }
}
exports.CalculateRideEstimateUseCaseRepository = CalculateRideEstimateUseCaseRepository;
