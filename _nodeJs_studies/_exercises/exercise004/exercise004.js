const prompt = require('prompt-sync')();

// Functions
function checkVarIsSpace(element) {
    if(element == '') {
        return (false);
    }else {
        return(element.replace(/ /g, '') == '')
    };
};


function validateCode(element, type) {
    for (let i=0; i < element.length; i++) {
        var char1 = element.charAt(i);
        var cc = char1.charCodeAt(0);

        switch (type) {
            case 'alphaNum':
                if( (cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123) ) {
                    continue;
                }else {
                    return false;
                }

            case 'alpha':
                if( (cc>64 && cc<91) || (cc>96 && cc<123) ) {
                    continue;
                }else {
                    return false;
                }

            case 'allUpper':
                if( (cc>64 && cc<91) ) {
                    continue;
                }else {
                    return false;
                }
                
            case 'allLower':
                if(cc>96 && cc<123) {
                    continue;
                }else {
                    return false;
                }

            case 'capital':
                if(i == 0) {
                    if( (cc>64 && cc<91) ) {
                        continue;
                    }else {
                        return false;
                    }
                }else{
                    if(cc>96 && cc<123) {
                        continue;
                    }else {
                        return false;
                    }
                }
        }
    }

    return true;     
}


// Main code
const userInput = prompt('Digite algo: ');

console.log(`\nO tipo primitido desse valor é ${typeof(userInput)}`);
console.log(`Só tem espaços: ${checkVarIsSpace(userInput)}`);
console.log(`É um número? ${!isNaN(Number(userInput.replace(',', '.')))}`)
console.log(`É alfabético: ${validateCode(userInput, 'alpha')}`)
console.log(`É alfanumérico? ${validateCode(userInput, 'alphaNum')}`)
console.log(`Está em maiúsculas? ${validateCode(userInput, 'allUpper')}`)
console.log(`Está em minúsculas? ${validateCode(userInput, 'allLower')}`)
console.log(`Está capitalizada? ${validateCode(userInput, 'capital')}`)

prompt('\nAperte Enter para finalizar.');
