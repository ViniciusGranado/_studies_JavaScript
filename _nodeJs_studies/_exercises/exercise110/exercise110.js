// Module import
const numbers = require('./numbers');
const currency = require('./currency');

// Main code
const value = numbers.getNumber('Digite um valor: R$');

currency.resume(value, 10, 20);
