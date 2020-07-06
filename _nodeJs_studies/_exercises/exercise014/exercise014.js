// Module import
const prompt = require('prompt-sync')();


// Functions
const getCelsius = () => {
    do {
        const userCelsiusStr = prompt('Informe a temperatura em Celsius: ');

        if (!userCelsiusStr) {
            console.log('Valor inválido, tente novamente.');
            continue;
        } else {
            const convertedUserCelsius = Number(userCelsiusStr.replace(',', '.'));

            if (isNaN(Number(userCelsiusStr))) {
                console.log('Valor inválido, tente novamente.');
                continue;
            } else {
                return Number(convertedUserCelsius);
            };
        }
    }while (true);   
}

const convertCtoF = (celsius) => {
    return (celsius * (9/5)) + 32;
}
// Main code
console.log('----------CONVERSOR DE TEMPERATURA----------\n');

const celsius = getCelsius();

const fahrenheit = convertCtoF(celsius);

console.log(`A temperatura de ${celsius.toString().replace('.', ',')}°C corresponde a ${fahrenheit.toString().replace('.', ',')}°F.\n`);

prompt('Aperte Enter para finalizar.');
