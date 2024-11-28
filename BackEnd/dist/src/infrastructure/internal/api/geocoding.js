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
exports.generateStaticMapUrl = generateStaticMapUrl;
const axios_1 = __importDefault(require("axios"));
function getCoordinates(address) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('apiKey: ', process.env.GOOGLE_API_KEY);
        const API_KEY = 'AIzaSyDUEPfeTCpCYjgnUAEtxoInQBuMijED2ug';
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
function generateStaticMapUrl(origin, destination) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
        const size = "600x300";
        const markers = `markers=color:blue|label:A|${origin.lat},${origin.lng}&markers=color:red|label:B|${destination.lat},${destination.lng}`;
        const path = `path=color:0x0000ff|weight:5|${origin.lat},${origin.lng}|${destination.lat},${destination.lng}`;
        return `${baseUrl}?size=${size}&${markers}&${path}&key=${process.env.GOOGLE_API_KEY}`;
    });
}
