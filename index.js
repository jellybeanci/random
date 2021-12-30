"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = exports.randomBoolean = exports.randomGaussianRange = exports.randomRange = exports.randomGaussian = void 0;
const int_1 = require("@jellybeanci/int");
function randomGaussian(degree = 3) {
    let rand = 0;
    for (let i = 0; i < degree; i++) {
        rand += Math.random();
    }
    const gauss = rand / degree;
    return (gauss * 2) - 1;
}
exports.randomGaussian = randomGaussian;
function randomRange(start, end) {
    const min = !!end ? start : 0;
    const max = !!end ? end : start;
    return min + Math.random() * (max - min);
}
exports.randomRange = randomRange;
function randomGaussianRange(start, end, degree = 3) {
    const min = !!end ? start : 0;
    const max = !!end ? end : start;
    return min + (0.5 * (1 + randomGaussian(degree))) * (max - min);
}
exports.randomGaussianRange = randomGaussianRange;
function randomBoolean() {
    return Math.random() < 0.5;
}
exports.randomBoolean = randomBoolean;
function randomInt(start, end) {
    return (0, int_1.int)(randomRange(start, end));
}
exports.randomInt = randomInt;