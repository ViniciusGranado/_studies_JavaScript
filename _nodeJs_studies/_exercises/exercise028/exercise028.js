// Module import
const prompt = require('prompt-sync')();


// Functions
function showHeading() {
    console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-');
    console.log('Vou pensar em um número entre 0 e 5. Tente adivinhar...');
    console.log('-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-\n');
}


function getUserGuess() {
    while (true) {
        const userGuessStr = prompt('Em que número eu pensei? ');

        if (validateGuess(userGuessStr)) {
            return parseInt(userGuessStr.trim().replace(',', '.'));
        } else {
            console.log('Valor inválido, tente novamente.\n');
        };
    };
}


function validateGuess(userGuess) {
    if (!userGuess) {
        return false;
    }
    
    const convertedUserGuess = parseInt(userGuess.trim().replace(',', '.'));
    if (isNaN(convertedUserGuess)) {
        return false;
    };
    if (convertedUserGuess < 0 || convertedUserGuess > 5) {
        return false;
    };

    return true;
}


function getComputerNumber() {
    return Math.floor(Math.random() * (6 - 0)) + 0;
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


// Main code
showHeading();

const userGuess = getUserGuess();
const computerNumber = getComputerNumber();

console.clear();
showHeading();
console.log('PROCESSANDO...');
sleep(2000);

console.clear();
showHeading();

if (userGuess === computerNumber) {
    console.log('PARABENS! Você conseguiu me vencer!\n');
} else {
    console.log(`GANHEI! Eu pensei no número ${computerNumber} e não no ${userGuess}!\n`);
};

prompt('Aperte Enter para finalizar.');
