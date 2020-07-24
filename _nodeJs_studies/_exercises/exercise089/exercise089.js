/* eslint-disable semi */
// Module import
const prompt = require('prompt-sync')();

// Functions
function getNewStudent () {
  const student = {};

  student.name = getStudentName();
  student.grade1 = getGrade('Nota 1: ');
  student.grade2 = getGrade('Nota 2: ');

  return student;
}

function getStudentName () {
  while (true) {
    const studentName = prompt('Nome: ');

    if (studentName) {
      return studentName.trim().slice(0, 1).toUpperCase() + studentName.trim().slice(1).toLowerCase();
    } else {
      console.log('Ocorreu um erro, tente novamente.\n');
    };
  };
}

function getGrade (message) {
  while (true) {
    const gradeStr = prompt(message);

    if (validateGrade(gradeStr)) {
      return +gradeStr.replace(',', '.');
    } else {
      console.log('Valor inválido, tente novamente.\n');
    };
  };
}

function validateGrade (gradeStr) {
  if (!gradeStr) {
    return false;
  };

  if (isNaN(gradeStr.replace(',', '.')) || +gradeStr.replace(',', '.') < 0 || +gradeStr.replace(',', '.') > 10) {
    return false;
  };

  return true;
};

function usersWishesToContinue (message) {
  while (true) {
    const userOption = prompt(message);

    if (validateUserOption(userOption)) {
      return userOption.trim().toUpperCase() === 'S';
    } else {
      console.log('Opção inválida, tente novamente.');
    };
  };
}

function validateUserOption (userOption) {
  if (!userOption) {
    return false;
  };

  if (userOption.trim().toUpperCase() !== 'S' && userOption.trim().toUpperCase() !== 'N') {
    return false;
  };

  return true;
}

function getStudentNumber (message) {
  while (true) {
    const userNumberStr = prompt(message);
    if (validateStudentNumber(userNumberStr)) {
      return +userNumberStr;
    } else {
      console.log('Número inválido, tente novamente.\n');
    };
  };
}

function validateStudentNumber (numberStr) {
  if (!numberStr) {
    return false;
  };

  if (isNaN(numberStr) || !Number.isInteger(+numberStr) || +numberStr < 0) {
    return false;
  };

  return true;
}

function showGradesTable (studentsList) {
  console.log('--------------------------------------------------');
  console.log('Noº'.padEnd(5) + 'NOME'.padEnd(31) + 'MÉDIA');
  console.log('--------------------------------------------------');

  for (let i = 0; i < studentsList.length; i++) {
    const studentMean = (studentsList[i].grade1 + studentsList[i].grade2) / 2;

    console.log(i.toString().padEnd(5) + studentsList[i].name.padEnd(31) + studentMean.toFixed(2));
  };

  console.log('--------------------------------------------------');
}

function showStudentDetails (studentsList, studentNumber) {
  console.log(`DADOS DO ALUNO: ${studentsList[studentNumber].name.toUpperCase()}`);
  console.log('--------------------------------------------------');
  console.log(`Nota 1: ${studentsList[studentNumber].grade1.toFixed(2)}`);
  console.log(`Nota 2: ${studentsList[studentNumber].grade2.toFixed(2)}`);
  console.log('--------------------------------------------------');
}
// Main code
const studentsList = [];

while (true) {
  console.log('----------------------------------------');
  console.log('            CADASTRO DE ALUNO           ');
  console.log('----------------------------------------');

  studentsList.push(getNewStudent());

  if (!usersWishesToContinue('Deseja cadastrar outro aluno? [S/N] ')) {
    break;
  };

  console.clear();
};

console.clear();
showGradesTable(studentsList);

while (true) {
  const studentNumber = getStudentNumber('Digite o número de um aluno para ver as suas notas individuais: (digite 999 para sair) ');

  if (studentNumber === 999) {
    break;
  } else if (studentNumber > studentsList.length - 1) {
    console.log('Aluno não encontrado.\n');
    continue;
  }

  console.clear();
  showGradesTable(studentsList)
  showStudentDetails(studentsList, studentNumber);
};

prompt('Aperte Enter para finalizar.');
