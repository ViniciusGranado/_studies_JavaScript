// Package import
const prompt = require('prompt-sync')();

// Functions
function getNumber() {
    do {
        const userNumberStr = Number(prompt('Digite um valor em metros: ').replace(',', '.'));

        if(isNaN(userNumberStr)) {
            console.log('Valor inválido, tente novamente.\n');
        }else {
            return(userNumberStr)
        }
    }while(true);
}

function convertMeters(meters, conversionRate) {
    return(meters*conversionRate);
}

// Main code
console.log('-----Conversor de medidas-----')
const userNumber = getNumber();

console.log(`\nA medida de ${userNumber} metros corresponde à: \n`)

console.log(`${convertMeters(userNumber, 0.001)} km`)
console.log(`${convertMeters(userNumber, 0.01)} hm`)
console.log(`${convertMeters(userNumber, 0.1)} dam`)
console.log(`${convertMeters(userNumber, 10)} dm`)
console.log(`${convertMeters(userNumber, 100)} cm`)
console.log(`${convertMeters(userNumber, 1000)} mm`)

prompt('\nAperte Enter para finalizar.')
