"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePet = exports.generateHuman = void 0;
function generateHuman(param, isKorean) {
    return {
        name: param.name,
        age: param.age,
        korean: isKorean,
        under18: !param.isAdult,
        created_at: new Date().toISOString(),
    };
}
exports.generateHuman = generateHuman;
function generatePet(name, spec) {
    return `${name} is ${spec}`;
}
exports.generatePet = generatePet;
