// Module import
const prompt = require('prompt-sync')();


// Functions
const getValue = (message, isInt=false) => {
    do { 
        const userValue = prompt(message);
        let convertedUserValue;

        if (isInt) {
            convertedUserValue = parseInt(userValue.replace(',', '.'));
        } else {
            convertedUserValue = Number(userValue.replace(',', '.'));
        }

        const userValueStatus = validateNumber(convertedUserValue, isInt);

        switch (userValueStatus) {
            case 'error':
            case 'isNaN':
                console.log('Valor inválido, tente novamente.\n')
                continue;
            
            case 'isLessThanZero':
                console.log('Por favor, digite um número maior ou igual a zero.\n');
                continue;

            case 'ok':
                return convertedUserValue;

            default:
                console.log('Ocorreu um erro, tente novamente.\n');
                continue;
        };
    } while (true);
}


const validateNumber = (value) => {
    if(!value) {
        return 'error';
    }else if (isNaN(value)) {
        return 'isNaN';
    }else if (value < 0) {
        return 'isLessThanZero';
    } else {
        return 'ok';
    };
}


const getFinalValue = (days, distance) => {
    return (days * 60) + (distance * 0.15);
}


const formatCurrency = (value) => {
    return value.toString().replace('.', ',');
}


// Main code
console.log('----------ALUGUEL DE CARROS----------');

const totalDays = getValue('Total de dias de aluguel: ', true);
const totalDistance = getValue('Total de Km rodados: ');

const finalValue = getFinalValue(totalDays, totalDistance);
const formattedValue = formatCurrency(finalValue);

console.log(`\nO total a pagar é R$${formattedValue}.`);

prompt('Aperte Enter para finalizar.');
