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
        const apiKey = process.env.GOOGLE_API_KEY;
        const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
        const response = yield axios_1.default.post(url, {
            origin: {
                location: {
                    latLng: { latitude: origin.split(",")[0], longitude: origin.split(",")[1] },
                },
            },
            destination: {
                location: {
                    latLng: { latitude: destination.split(",")[0], longitude: destination.split(",")[1] },
                },
            },
            travelMode: "DRIVE",
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
        });
        const route = response.data.routes[0];
        console.log('route: ', route);
        return route;
    });
}
