// Module import
const numbers = require('./utilities/numbers');
const currency = require('./utilities/currency');

// Main code
const value = numbers.getNumber('Digite um valor: R$');

currency.resume(value, 10, 20);
