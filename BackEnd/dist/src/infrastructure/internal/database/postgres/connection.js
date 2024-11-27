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
exports.Connection = void 0;
const data_source_1 = require("./data_source");
class Connection {
    static getRepository(T) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSource = yield (0, data_source_1.getDataSource)();
            if (!dataSource.isInitialized) {
                yield dataSource.initialize();
            }
            return dataSource.getRepository(T);
        });
    }
}
exports.Connection = Connection;
