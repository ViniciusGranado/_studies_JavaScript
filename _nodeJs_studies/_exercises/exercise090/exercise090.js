// Module import
const prompt = require('prompt-sync')();

// Functions
function getStudent () {
  const student = {};

  student.name = getName();
  student.mean = getMean(student.name);

  if (student.mean < 5) {
    student.status = 'Reprovado';
  } else if (student.mean < 7) {
    student.status = 'Recuperação';
  } else {
    student.status = 'Aprovado';
  };

  return student;
};

function getName () {
  while (true) {
    const userName = prompt('Nome: ');

    if (userName) {
      return userName.slice(0, 1).toUpperCase() + userName.slice(1);
    } else {
      console.log('Ocorreu um erro, tente novamente.\n');
    };
  };
}

function getMean (name) {
  while (true) {
    const userMean = prompt(`Média de ${name}: `);

    if (validateMean(userMean)) {
      return +userMean.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.');
    };
  };
}

function validateMean (meanStr) {
  if (!meanStr) {
    return false;
  };

  if (isNaN(meanStr.replace(',', '.')) || +meanStr.replace(',', '.') < 0 || +meanStr.replace(',', '.') > 10) {
    return false;
  };

  return true;
}

// Main code
const student = getStudent();

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(`- Nome do aluno: ${student.name}`);
console.log(`- Média do aluno: ${student.mean}`);
console.log(`- Situação do aluno: ${student.status}`);
