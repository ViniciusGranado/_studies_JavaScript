/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getNewUser () {
  const user = {};

  user.name = getName('Nome: ');
  user.gender = getGender('Sexo: [M/F] ');
  user.age = getIntPositiveValue('Idade: ');

  return user;
}

function getName (message) {
  while (true) {
    const name = prompt(message);

    if (name) {
      return name.trim().slice(0, 1).toUpperCase() + name.trim().slice(1).toLowerCase();
    } else {
      console.log('Aconteceu um erro inesperado.\n');
    };
  };
}

function getGender (message) {
  while (true) {
    const gender = prompt(message);

    if (validateGender(gender)) {
      return gender.trim().toUpperCase();
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateGender (genderStr) {
  if (!genderStr) {
    return false;
  };

  if (genderStr.trim().toUpperCase() !== 'M' && genderStr.trim().toUpperCase() !== 'F') {
    return false;
  };

  return true;
}

function getIntPositiveValue (message) {
  while (true) {
    const userValue = prompt(message);

    if (validateIntPositiveValue(userValue)) {
      return +userValue;
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateIntPositiveValue (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function userWishesToContinue (message) {
  while (true) {
    const userOption = prompt(message);

    if (validateUserOption(userOption)) {
      return userOption.trim().toUpperCase() === 'S';
    } else {
      console.log('Opção inválida, tente novamente.\n');
    };
  };
}

function validateUserOption (optionStr) {
  if (!optionStr) {
    return false;
  };

  if (optionStr.trim().toUpperCase() !== 'S' && optionStr.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
};

function showResult (users) {
  const totalUsers = users.length;
  const ageMean = getAgeMean(users);
  const womenRegistered = getAllWomen(users);
  const usersWithAgeAboveMean = getUsersWithAgeAboveMean(users, ageMean)

  if (totalUsers === 1) {
    console.log('- Ao temos 1 usuário cadastrado.');
  } else {
    console.log(`- Ao todo temos ${totalUsers} usuários cadastrados.`);
  };

  console.log(`- A média de idade dos usuários é de ${ageMean.toFixed(1)} anos.`);

  if (womenRegistered.length === 0) {
    console.log('- Não houve mulheres cadastradas.');
  } else {
    console.log(`- As mulheres cadastradas foram: ${formatArray(womenRegistered)}`);
  };

  if (usersWithAgeAboveMean.length !== 0) {
    console.log('- Lista de pessoas com idade acima da média do grupo: ');

    for (const i of usersWithAgeAboveMean) {
      console.log(`${' '.repeat(5)}Nome: ${i.name}; Sexo: ${i.gender}; Idade: ${i.age}`);
    };
  }
}

function getAgeMean (users) {
  const sumAge = users.reduce((acc, cur) => {
    return acc + cur.age
  }, 0);

  return sumAge / users.length;
}

function getAllWomen (users) {
  const women = [];

  for (const i of users) {
    if (i.gender === 'F') {
      women.push(i.name);
    };
  };

  return women;
}

function getUsersWithAgeAboveMean (users, ageMean) {
  const usersAboveAge = [];

  for (const i of users) {
    if (i.age > ageMean) {
      usersAboveAge.push(i);
    };
  };

  return usersAboveAge;
}

function formatArray (array) {
  if (array.length <= 1) { return array };

  return array.slice(0, -1).join(', ') + ' e ' + array.slice(-1);
}

// Main code
const users = [];

while (true) {
  console.log('-----------------------------------------');
  console.log('           CADASTRO DE USUÁRIO');
  console.log('-----------------------------------------');

  users.push(getNewUser());

  if (!userWishesToContinue('Deseja cadastrar outro usuário? [S/N] ')) {
    break;
  };

  console.clear();
};

console.clear();
showResult(users);
