"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHuman = void 0;
function generateHuman(param, isKorean) {
    return {
        name: param.name,
        age: param.age,
        korean: isKorean,
        under18: !param.isAdult,
    };
}
exports.generateHuman = generateHuman;
