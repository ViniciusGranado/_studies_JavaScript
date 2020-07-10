// Module import
const prompt = require('prompt-sync')();


// Functions
const getNumber = () => {
    while (true) {
        const userNumber = prompt('Digite um valor inteiro entre 0 e 9999: ');

        if (validateNumber(userNumber)) {
            return Number(userNumber);
        } else {
            console.log('Valor inválido, tente novamente.\n');
        }
    };
}


const validateNumber = (value) => {
    if (!value) {
        return false;
    };
    if (isNaN(value)) {
        return false;
    }
    if (Number(value) < 0 || Number(value) > 9999) {
        return false;
    }

    return true;
}


const getUnits = (number) => {
    const unitsList = [];

    const thousands = Math.floor(number / 1000) % 10;
    const hundreds = Math.floor(number / 100) % 10;
    const tens = Math.floor(number / 10) % 10;
    const units = Math.floor(number / 1 ) % 10;

    unitsList.push(thousands);
    unitsList.push(hundreds);
    unitsList.push(tens);
    unitsList.push(units);

    return unitsList;
}


// Main code
const number = getNumber();

const numberUnits = getUnits(number);

console.log(`\nAnalisando o número ${number}.`);
console.log(`Unidade: ${numberUnits[3]}`);
console.log(`Dezena: ${numberUnits[2]}`);
console.log(`Centena: ${numberUnits[1]}`);
console.log(`Milhar: ${numberUnits[0]}\n`);

prompt('Aperte Enter para finalizar.')
