// Module import
const prompt = require('prompt-sync')();

// Functions
function getGender () {
  let userGenderStr = prompt('Informe o seu sexo: [M/F] ');

  while (true) {
    if (validateGenderStr(userGenderStr)) {
      return userGenderStr.trim().toUpperCase();
    } else {
      userGenderStr = prompt('Dados inválidos. Por favor, informe o seu sexo: [M/F] ');
    };
  };
}

function validateGenderStr (genderStr) {
  if (!genderStr) {
    return false;
  };

  if (genderStr.trim().toUpperCase() !== 'M' && genderStr.trim().toUpperCase() !== 'F') {
    return false;
  };

  return true;
}

// Main code
const userGender = getGender();

console.log(`\nSexo ${userGender} validado com sucesso.`);
prompt('Aperte Enter para finalizar.');
