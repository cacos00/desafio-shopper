"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cmd = void 0;
const cmd_1 = require("./delivery/cmd/cmd");
require('dotenv').config({ path: '../.env' });
class Cmd {
    main() {
        this.init();
    }
    init() {
        process.env['POSTGRESQL_URI'] = 'postgres://postgres:josenunes10@localhost/postgres';
        new cmd_1.CmdRest().server();
    }
}
exports.Cmd = Cmd;
