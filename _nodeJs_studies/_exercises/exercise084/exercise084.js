// Module import
const prompt = require('prompt-sync')();

// Functions
function getNewUser () {
  const newUser = {};

  newUser.name = getUserName();
  newUser.weight = getUserWeight();

  return newUser;
};

function getUserName () {
  while (true) {
    const userName = prompt('Nome: ');

    if (userName) {
      const formattedName = userName.trim().slice(0,1).toUpperCase() + userName.trim().slice(1);
      return formattedName;
    } else {
      console.log('Ocorreu um erro, tente novamente.\n');
    };
  };
}

function getUserWeight () {
  while (true) {
    const userWeightStr = prompt('Peso: ');

    if (validateUserWeight(userWeightStr)) {
      return +userWeightStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateUserWeight (weightStr) {
  if (!weightStr) {
    return false;
  };

  if (isNaN(weightStr.replace(',', '.')) || +weightStr.replace(',', '.') < 0) {
    return false;
  };

  return true;
}

function getUserOption () {
  while (true) {
    const userOption = prompt('Deseja cadastrar outro usuário? [S/N] ');

    if (validateUserOption(userOption)) {
      return userOption.trim().toUpperCase() === 'S';
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateUserOption (option) {
  if (!option) {
    return false;
  };

  if (option.trim().toUpperCase() !== 'S' && option.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
}

function getMinWeight (usersArray) {
  return usersArray.reduce((acc, cur, ind) => {
    if (ind === 1) {
      return Math.min(acc.weight, cur.weight);
    };

    return Math.min(acc, cur.weight);
  });
}

function getMaxWeight (usersArray) {
  return usersArray.reduce((acc, cur, ind) => {
    if (ind === 1) {
      return Math.max(acc.weight, cur.weight);
    };

    return Math.max(acc, cur.weight);
  });
}

function getWeightNames (users, weight) {
  const names = [];
  for (const i of users) {
    if (i.weight === weight) {
      names.push(i.name);
    };
  };

  return names;
}

function formatArray (array) {
  if (array.length <= 1) {
    return array;
  };

  return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
}
// Main code
const users = [];

while (true) {
  console.log('----------CADASTRO DE USUÁRIO----------');

  users.push(getNewUser());

  const userWishesToContinue = getUserOption();

  if (!userWishesToContinue) { break; };

  console.log('');
}

const maxWeight = getMaxWeight(users);
const usersThatHasMaxWeight = getWeightNames(users, maxWeight);

const minWeight = getMinWeight(users);
const usersThatHasMinWeight = getWeightNames(users, minWeight);

console.log(`\nForam cadastradas ${users.length} pessoas.`);
console.log(`O Maior peso cadastrado foi ${maxWeight}Kg. Peso de ${formatArray(usersThatHasMaxWeight)}`);
console.log(`O Maior peso cadastrado foi ${minWeight}Kg. Peso de ${formatArray(usersThatHasMinWeight)}`);

prompt('Aperte Enter para finalizar.');
