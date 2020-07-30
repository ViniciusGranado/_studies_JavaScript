// Module import
const numbers = require('./numbers');
const currency = require('./currency');

// Main code
const value = numbers.getNumber('Digite um valor: R$');

console.log(`\nA metade de ${currency.formatCurrency(value)} é ${currency.formatCurrency(currency.half(value))}`);
console.log(`O dobro de ${currency.formatCurrency(value)} é ${currency.formatCurrency(currency.double(value))}.`);
console.log(`Acrescentando 10%, temos ${currency.formatCurrency(currency.increaseNPercent(value, 10))}.`);
console.log(`Subtraindo 15% temos ${currency.formatCurrency(currency.decreaseNPercent(value, 15))}.`);
