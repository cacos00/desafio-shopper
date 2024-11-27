"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNumberEmpty = checkNumberEmpty;
exports.checkStringEmpty = checkStringEmpty;
exports.checkListEmpty = checkListEmpty;
exports.checkBooleanEmpty = checkBooleanEmpty;
exports.checkDateEmpty = checkDateEmpty;
function checkNumberEmpty(e) {
    return e === undefined || e === null || Number.isNaN(e);
}
function checkStringEmpty(e) {
    return e === undefined || e === null || e.trim() === '';
}
function checkListEmpty(arr) {
    return arr === undefined || arr === null || arr.length <= 0;
}
function checkBooleanEmpty(e) {
    return e === undefined || e === null;
}
function checkDateEmpty(e) {
    return e === undefined || e === null;
}
