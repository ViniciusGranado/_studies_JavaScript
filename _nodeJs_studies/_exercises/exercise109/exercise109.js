// Module import
const numbers = require('./numbers');
const currency = require('./currency');

// Main code
const value = numbers.getNumber('Digite um valor: R$');

console.log(`\nA metade de ${currency.formatCurrency(value)} é ${currency.half(value, true)}`);
console.log(`O dobro de ${currency.formatCurrency(value)} é ${currency.double(value, true)}.`);
console.log(`Acrescentando 10%, temos ${currency.increaseNPercent(value, 10, true)}.`);
console.log(`Subtraindo 15% temos ${currency.decreaseNPercent(value, 15, true)}.`);
