// Module import
const prompt = require('prompt-sync')();


// Functions
function getFourNames() {
    const names = [];

    const message = ['primeiro', 'segundo', 'terceiro', 'quarto'];
    for (let i = 0; i < 4; i++) {
        while (true) {
            const name = prompt(`Digite o ${message[i]} nome: `);

            if (name === '') {
                console.log('[ERRO] Digite um nome válido.\n');
                continue;
            } else {
                names.push(formatName(name));
                console.log('')
                break;
            };
        }
    }

    return names;
}


function formatName(name) {
    return (name[0].toUpperCase() + name.slice(1).toLowerCase());
}


function shufleArray(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
    
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        const temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        
    }
    
    return array;
}


// Main code
const namesList = getFourNames();

const randomNamesList = shufleArray(namesList);

console.log(`Os nomes em order aleatória são ${randomNamesList[0]}, ${randomNamesList[1]}, ${randomNamesList[2]} e ${randomNamesList[3]}.\n`);

prompt('Aperte Enter para finalizar.')
