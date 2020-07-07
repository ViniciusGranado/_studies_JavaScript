// Module import
const prompt = require('prompt-sync')();


// Functions
const getAngle = () => {
    do {
        const userAngleStr = prompt('Digite um ângulo: ');

        if (!validateAngle(userAngleStr)) {
            console.log('Valor inválido, tente novamente.\n');
            continue;
        } else {
            const convertedUserAngle = Number(userAngleStr.replace(',', '.'));
            return convertedUserAngle;
        }
    } while (true);
}


const validateAngle = (angle) => {
    if (!angle) {
        return false;
    } else {
        const convertedAngle = Number(angle.replace(',', '.'));

        if (isNaN(convertedAngle)) {
            return false;
        } else if (convertedAngle < 0 || convertedAngle > 360) {
            return false;
        }
    }
    
    return true;
}


const convertDegreeToRadian = (degree) => {
    const radian = (degree * (Math.PI / 180));
    return radian;
}


const getSin = (angle) => {
    return Math.sin(angle);
}


const getCos = (angle) => {
    return Math.cos(angle);
}


const getTan = (angle) => {
    return Math.tan(angle);
}


// Main code
const userAngle = getAngle();

const angleConvertedToRadian = convertDegreeToRadian(userAngle);

const sin = getSin(angleConvertedToRadian);
const cos = getCos(angleConvertedToRadian);
const tan = getTan(angleConvertedToRadian);

console.log(`\nO angulo de ${userAngle}° tem o SENO de ${sin.toFixed(3)}.`);
console.log(`O angulo de ${userAngle}° tem o COSENO de ${cos.toFixed(3)}.`);
console.log(`O angulo de ${userAngle}° tem a TANGENTE de ${tan.toFixed(3)}.\n`);

prompt('Aperte Enter para finalizar.');