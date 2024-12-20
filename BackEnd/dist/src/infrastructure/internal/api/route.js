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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRoutes = computeRoutes;
const axios_1 = __importDefault(require("axios"));
function computeRoutes(origin, destination) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const apiKey = process.env.GOOGLE_API_KEY;
        const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
        const data = {
            origin: {
                address: origin
            },
            destination: {
                address: destination
            },
            travelMode: "DRIVE",
        };
        const headers = {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline"
        };
        try {
            const response = yield axios_1.default.post(url, data, { headers });
            if (!response.data.routes || response.data.routes.length === 0) {
                throw new Error("Nenhuma rota encontrada para os endereços fornecidos.");
            }
            const route = response.data.routes[0];
            return route;
        }
        catch (error) {
            console.error("Erro ao calcular rotas:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
            throw new Error("Erro ao calcular a rota. Verifique os endereços e tente novamente.");
        }
    });
}
