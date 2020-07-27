// Module import
const prompt = require('prompt-sync')();

// Functions
function getIntValue (message) {
  while (true) {
    const valueStr = prompt(message);

    if (validateIntValue(valueStr)) {
      return +valueStr;
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateIntValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function vote (birthYear) {
  const userAge = new Date().getFullYear() - birthYear;

  if (userAge < 16) {
    console.log(`Com ${userAge} anos: VOTO NÃO PERMITIDO`);
  } else if (userAge < 18) {
    console.log(`Com ${userAge} anos: VOTO OPCIONAL`)
  } else {
    console.log(`Com ${userAge} anos: VOTO OBRIGATÓRIO`)
  };
};

// Main code
const userBirthYear = getIntValue('Ano de nascimento: ');
vote(userBirthYear);
