// Module import
const prompt = require('prompt-sync')();


// Functions
function getValue(message) {
    do {
        const userInput = prompt(message);

        if (!validateUserInput(userInput)) {
            console.log('Valor inválido, tente novamente.\n');
            continue;
        } else {
            const convertedUserInput = Number(userInput.replace(',', '.'))
            return convertedUserInput;
        };
        
    } while (true);
}


function validateUserInput(value) {
    if (!value) {
        return false;
    };
    if ( isNaN(Number(value.replace(',', '.'))) ) {
        return false;
    };
    
    return true;
}


function getHypotenuse(opposite, adjacent) {
    return Math.sqrt(
        (opposite ** 2) + (adjacent ** 2)
    );
}
// Main code
console.log('----------CALCULADORA DE HIPOTENUSA----------');

const oppositeWidth = getValue('Comprimento do cateto oposto: ');
const adjacentWidth = getValue('Comprimento do cateto adjacente: ');

const hypotenuse = getHypotenuse(oppositeWidth, adjacentWidth);
    
const formattedHypotenuse = hypotenuse.toFixed(2).replace('.', ',');
    
console.log(`\nA hipotenusa irá medir ${formattedHypotenuse}.\n`);

prompt('Aperte Enter para finalizar.');
