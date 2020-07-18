/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function get4Users () {
  const users = [];

  for (let i = 0; i < 4; i++) {
    console.log(`----- ${i + 1}ª PESSOA ------`)

    const userInfo = {};

    userInfo.name = getUserName();
    userInfo.age = getUserAge();
    userInfo.gender = getUserGender();

    users.push(userInfo);
    console.log('');
  };

  return users;
}

function getUserName () {
  while (true) {
    const userNameStr = prompt('Nome: ');

    if (!userNameStr) {
      console.log('[Erro] Ocorreu um erro inesperado.\n');
      continue;
    };

    return userNameStr[0].toUpperCase() + userNameStr.slice(1).toLowerCase();
  };
}

function getUserAge () {
  while (true) {
    const userAgeStr = prompt('Idade: ');

    if (!userAgeStr || isNaN(userAgeStr) || +userAgeStr < 0 || !Number.isInteger(+userAgeStr)) {
      console.log('Valor inválido, tente novamente.\n');
      continue;
    };

    return +userAgeStr;
  };
}

function getUserGender () {
  while (true) {
    const userGenderStr = prompt('Sexo [M/F]: ');

    if (!userGenderStr) {
      console.log('Resposta inválida. Utilize apenas as letras \'M\' ou  \'F\'.\n');
      continue;
    };
    if (userGenderStr.trim().toLowerCase() !== 'm' && userGenderStr.trim().toLowerCase() !== 'f') {
      console.log('Resposta inválida. Utilize apenas as letras \'M\' ou  \'F\'.\n');
      continue;
    };

    return userGenderStr.trim().toLowerCase();
  };
}

function getUsersAgeMean (users) {
  const usersAgeSum = users.reduce((acc, cur, ind) => {
    if (ind === users.length - 1) {
      acc += cur.age;
      return acc / users.length
    };
    return acc + cur.age;
  }, 0);

  return usersAgeSum;
};

function getOlderMan (users) {
  const older = users.reduce((acc, cur) => {
    if (acc.gender === 'm') {
      if (cur.gender === 'm' && cur.age > acc.age) {
        return cur;
      } else {
        return acc;
      }
    } else {
      return cur;
    };
  });

  if (older.gender === 'm') {
    return older;
  } else {
    return 0;
  };
}

function getWomenWithLessThan20Years (users) {
  return users.reduce((acc, cur) => {
    if (cur.gender === 'f' && cur.age < 20) {
      acc++
    };
    return acc;
  }, 0);
}

// Main code
const users = get4Users();

const usersAgeMean = getUsersAgeMean(users);
const olderMan = getOlderMan(users);
const womenWithLessThan20Years = getWomenWithLessThan20Years(users);

console.log('\n---------- RESULTADO ----------')
console.log(`A média de idade do grupo é de ${usersAgeMean.toFixed(2)} anos.`);

if (!olderMan) {
  console.log('Não houve homens cadastrados no grupo.');
} else {
  console.log(`O homem mais velho tem ${olderMan.age} anos e se chama ${olderMan.name}.`)
};

if (womenWithLessThan20Years === 0) {
  console.log('Não houve mulheres com menos de 20 anos cadastradas no grupo.\n');
} else if (womenWithLessThan20Years === 1) {
  console.log('Houve uma mulher com menos de 20 anos cadastradas no grupo.\n');
} else {
  console.log(`Houve ${womenWithLessThan20Years} mulheres com menos de 20 anos cadastradas no grupo.\n`);
};

prompt('Aperte Enter para finalizar.');
