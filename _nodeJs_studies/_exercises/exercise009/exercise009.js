// Module import
const prompt = require('prompt-sync')();


// Functions
function getIntNumber() {
    do {
        const userNumberStr = parseInt(prompt('Digite um número inteiro para ver sua tabuada: '));
        
        if(isNaN(userNumberStr)) {
            console.log('\nValor inválido. Tente novamente.');
        }else {
            return(userNumberStr);
        }
    }while(true)
}


function showTable(value) {
    console.log('----------------------');

    for(let i = 0; i <= 10; i++) {
        console.log(`${value} X ${i.toString().padStart(2, ' ')} = ${value * i}`);
    }

    console.log('----------------------\n');
}


// Main code
console.log('----------------------');
console.log('       TABUADA        ');
console.log('----------------------');

const userNumber = getIntNumber();
showTable(userNumber);

prompt('\nAperte Enter para finalizar.');
