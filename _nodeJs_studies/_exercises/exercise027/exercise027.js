// Module import
const prompt = require('prompt-sync')();


// Functions
function getFullNameArray() {
    while (true) {
        const nameStr = prompt('Digite o seu nome completo: ');

        if (nameStr) {
            return nameStr.trim().toLowerCase().split(' ');
        } else {
            console.log('Por favor, digite um valor válido.\n');
        };
    };
}


function formatNameArray(nameArray) {
    const formattedName = [];

    for (let i of nameArray) {
        formattedName.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
    };

    return formattedName;
}


// Main 
const userFullNameArray = getFullNameArray();
const formattedName = formatNameArray(userFullNameArray);

const firstName = formattedName[0];
const lastName = formattedName[formattedName.length - 1];

console.log('\nMuito prazer em conhecer!');
console.log(`O seu primeiro nome é ${firstName}.`);
console.log(`O seu último nome é ${lastName}.\n`);

prompt('Aperte Enter para finalizar.')
