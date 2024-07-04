import { sum, substract } from './modulos/sum-substract.js';
import * as Operations from './modulos/multiply-divide.js';

const resultSum = sum(67, 3);
console.log(`resultSuma: ${resultSum}`);

const resultSubstract = substract(7, 3);
console.log(`resultSubstract: ${resultSubstract}`);

const resultMultiply = Operations.multiply(4, 5);
console.log(`resultMultiply: ${resultMultiply}`);

const resultDivide = Operations.divide(4, 5);
console.log(`resultMultiply: ${resultDivide}`);

