// Module import
const prompt = require('prompt-sync')();


// Functions
const askNames = () => {
    const questions = [
        'Nome do primeiro aluno: ',
        'Nome do segundo aluno: ',
        'Nome do terceiro aluno: ',
        'Nome do quarto aluno: '
    ];

    const names = [];

    for (let i = 0; i < 4; i++) {
        do {
            const name = prompt(questions[i]);
            console.log('')

            if (name == '') {
                console.log('[ERRO] Insira um nome válido.\n');
                continue;
            } else {
                names.push(name);
                break;
            }
        } while (true);
    };

    return names;
}


const getRandomName = (listNames) => {
    const randomNumber = Math.floor(Math.random() * (4 - 0)) + 0;
    return listNames[randomNumber];
}


// Main code
const userNames = askNames();
const randomName = getRandomName(userNames);
const formattedName = (randomName[0].toUpperCase() + randomName.slice(1).toLowerCase());

console.log(`\nO aluno escolhido foi ${formattedName}.\n`);

prompt('Aperte Enter para finalizar.');
