// Module import
const prompt = require('prompt-sync')();


// Functions
const getName = () => {
    while (true) {
        const userName = prompt('Digite o seu nome completo: ').trim();

        if (userName) {
            return userName;
        } else {
            console.log('[ERRO] Insira um nome válido.\n')
        }
    }
}


const getNumberLetters = (name) => {
    const nameWithoutSpaces = name.replace(/\s+/g , '');
    return nameWithoutSpaces.length;
}

const getFirstName = (name) => {
    let firstName = '';

    for (let i of name) {
        if (i == ' ') {
            break;
        }
        firstName += i;
    };
    
    return firstName;
}

const formatName = (name) => {
    return (name[0].toUpperCase() + name.slice(1).toLowerCase());
}


// Main code
const name = getName();
const numberLettersName = getNumberLetters(name);
const firstName = getFirstName(name);
const formattedFirstName = formatName(firstName);

console.log(`\nSeu nome em maiúsculas é ${name.toUpperCase()}`);
console.log(`Seu nome em minúsculas é ${name.toLowerCase()}`);
console.log(`Seu nome tem ao todo ${numberLettersName} letras.`);
console.log(`Seu primeiro nome é ${formattedFirstName} e ele tem ${formattedFirstName.length} letras.\n`);

prompt('Aperte Enter para finalizar.');
