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
exports.Cmd = void 0;
const cmd_1 = require("./delivery/cmd/cmd");
class Cmd {
    constructor() {
        this.CMD_REST = 'rest';
    }
    main() {
        this.initDev();
        //this.init()
    }
    checkEnvVar() {
        return __awaiter(this, void 0, void 0, function* () {
            const POSTGRESQL_URI = '';
            if (!POSTGRESQL_URI) {
                console.log('var POSTGRESQL_URI not defined');
                return false;
            }
            else {
                process.env['POSTGRESQL_URI'] = POSTGRESQL_URI;
            }
            return true;
        });
    }
    initDev() {
        process.env['POSTGRESQL_URI'] = 'postgres://postgres:josenunes10@192.168.60.251:5432/Ride';
        process.env['GOOGLE_API_KEY'] = 'AIzaSyDUEPfeTCpCYjgnUAEtxoInQBuMijED2ug';
        new cmd_1.CmdRest().server();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.checkEnvVar()) {
                const CMD = process.env.CMD;
                if (CMD === this.CMD_REST) {
                    new cmd_1.CmdRest().server();
                }
            }
        });
    }
}
exports.Cmd = Cmd;
