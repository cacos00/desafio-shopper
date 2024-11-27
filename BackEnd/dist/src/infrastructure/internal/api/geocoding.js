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
exports.getCoordinates = getCoordinates;
const axios_1 = __importDefault(require("axios"));
function getCoordinates(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = process.env.GOOGLE_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;
        try {
            const response = yield axios_1.default.get(url);
            const data = response.data;
            if (data.status === 'OK') {
                const location = data.results[0].geometry.location;
                return location;
            }
            else {
                console.error(`Geocoding error: ${data.status}`);
                return null;
            }
        }
        catch (error) {
            console.error('Error fetching geocoding data:', error);
            return null;
        }
    });
}
