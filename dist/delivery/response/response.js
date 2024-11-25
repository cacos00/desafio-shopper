"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorResponse = exports.SuccessResponse = void 0;
class SuccessResponse {
    success(res, body) {
        return res.status(200).json(body);
    }
}
exports.SuccessResponse = SuccessResponse;
class InternalServerErrorResponse {
    internalServerError(res, error) {
        return res.status(200).send(error);
    }
}
exports.InternalServerErrorResponse = InternalServerErrorResponse;
