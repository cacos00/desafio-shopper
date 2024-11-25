"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAG_PRE_CONDITION_ERROR = exports.TAG_INTERNAL_SERVER_ERROR = exports.InternalServerError = exports.PreconditionError = exports.ErrorEntity = void 0;
const TAG_INTERNAL_SERVER_ERROR = '[INTERNAL SERVER ERROR]';
exports.TAG_INTERNAL_SERVER_ERROR = TAG_INTERNAL_SERVER_ERROR;
const TAG_PRE_CONDITION_ERROR = '[PRE CONDITION ERROR]';
exports.TAG_PRE_CONDITION_ERROR = TAG_PRE_CONDITION_ERROR;
class ErrorEntity {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}
exports.ErrorEntity = ErrorEntity;
class PreconditionError extends ErrorEntity {
    constructor(message) {
        super(PreconditionError.PRECONDITION_ERROR, message);
    }
}
exports.PreconditionError = PreconditionError;
PreconditionError.PRECONDITION_ERROR = 1;
class InternalServerError extends ErrorEntity {
    constructor(message) {
        super(InternalServerError.INTERNAL_SERVER_ERROR, message);
    }
}
exports.InternalServerError = InternalServerError;
InternalServerError.INTERNAL_SERVER_ERROR = 2;
