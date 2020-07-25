/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getUserInfo () {
  const user = {};

  user.name = getName();
  user.age = calculateAge(getIntValue('Ano de nascimento: '));
  user.ctps = getIntValue('Carteira de trabalho: ');

  if (user.ctps !== 0) {
    user.hireYear = getIntValue('Ano de contratação: ');
    user.salary = getFloatValue('Salário: ');
    user.retirementAge = getRetirementAge(user);
  };

  return user;
}

function getName () {
  while (true) {
    const userName = prompt('Nome: ');

    if (userName) {
      return userName.trim().slice(0, 1).toUpperCase() + userName.trim().slice(1);
    } else {
      console.log('Ocorreu um erro, tente novamente.\n');
    };
  };
}

function getIntValue (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateIntStr(userValueStr)) {
      return +userValueStr;
    } else {
      console.log('Valor inválido, tente novamente.\n')
    };
  };
}

function validateIntStr (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr) || !Number.isInteger(+valueStr) || +valueStr < 0) {
    return false;
  };

  return true;
}

function calculateAge (birthYear) {
  return new Date().getFullYear() - birthYear;
}
function getFloatValue (message) {
  while (true) {
    const userValueStr = prompt(message);

    if (validateFloatStr(userValueStr)) {
      return +userValueStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateFloatStr (valueStr) {
  if (!valueStr) {
    return false;
  };

  if (isNaN(valueStr.replace(',', '.')) || +valueStr.replace(',', '.') < 0) {
    return false;
  };

  return true;
}

function getRetirementAge (userInfo) {
  const actualYear = new Date().getFullYear();

  return (35 - (actualYear - userInfo.hireYear) + userInfo.age);
}

function showResult (userInfo) {
  console.log('--------------------------------------------------');

  console.log(`Nome: ${userInfo.name}`);
  console.log(`Idade: ${userInfo.age}`);

  if (userInfo.ctps === 0) {
    console.log('Carteira de trabalho: Não possui.');
  } else {
    console.log(`Carteira de trabalho: ${userInfo.ctps}`);
    console.log(`Ano de contratação: ${userInfo.hireYear}`);
    console.log(`Salário: R$${userInfo.salary.toFixed(2)}`);
    console.log(`Você irá se aposentar com ${userInfo.retirementAge} anos`)
  }

  console.log('--------------------------------------------------');
}
// Main code
const userInfo = getUserInfo();

showResult(userInfo);
