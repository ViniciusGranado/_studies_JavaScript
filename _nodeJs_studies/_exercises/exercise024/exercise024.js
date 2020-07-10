// Module import
const prompt = require('prompt-sync')();


// Functions
const getCity = () => { 
    while (true) {
        const cityStr = prompt('Em que cidade você nasceu? ');

        if (cityStr) {
            return cityStr.trim();
        } else {
            console.log('Digite uma cidade válida.\n');
        };
    };
}


const checkIfStartWithSanto = (cityArray) => {
    return cityArray[0].toUpperCase() === 'SANTO';
}


const formatName = (cityArray) => {
    let formattedName = '';
    
    for (let i of cityArray) {
        if (i === cityArray[cityArray.length -1 ]) {
            formattedName += i[0].toUpperCase() + i.slice(1).toLowerCase();
        } else {
            formattedName += i[0].toUpperCase() + i.slice(1).toLowerCase() + ' ';
        }
    }
    
    return formattedName;
}


// Main code
const userCity = getCity();
const cityArray = userCity.split(/\s+/);
const startsWithSanto = checkIfStartWithSanto(cityArray);
const formattedCityName = formatName(cityArray);

if (startsWithSanto) {
    console.log(`A cidade de ${formattedCityName} se inicia com "Santo".\n`);
} else {
    console.log(`A cidade de ${formattedCityName} não se inicia com "Santo".\n`);
}

prompt('Aperte Enter para finalizar.');
