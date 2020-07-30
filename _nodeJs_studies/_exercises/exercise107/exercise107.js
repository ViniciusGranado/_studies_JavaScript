// Module import
const numbers = require('./numbers');
const currency = require('./currency');

// Main code
const value = numbers.getNumber('Digite um valor: R$');

console.log(`\nA metade de R$${value.toFixed(2)} é ${currency.half(value).toFixed(2)}`);
console.log(`O dobro de R$${value.toFixed(2)} é ${currency.double(value).toFixed(2)}.`);
console.log(`Acrescentando 10%, temos R$${currency.increaseNPercent(value, 10).toFixed(2)}.`);
console.log(`Subtraindo 15% temos R$${currency.decreaseNPercent(value, 15).toFixed(2)}.`);
