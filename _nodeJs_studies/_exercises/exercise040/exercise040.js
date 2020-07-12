// Module import
const prompt = require('prompt-sync')();

// Functions
function get2Grades () {
  const grades = [];
  const messages = ['Primeira nota: ', 'Segunda nota: '];

  for (let i = 0; i < 2; i++) {
    while (true) {
      const userGradeStr = prompt(messages[i]);

      if (validateGrade(userGradeStr)) {
        grades.push(Number(userGradeStr.trim()));
        break;
      } else {
        console.log('Valor inválido, tente novamente. \n')
      };
    };
  };

  return grades;
}

function validateGrade (gradeStr) {
  if (!gradeStr) {
    return false;
  };

  const convertedGrade = Number(gradeStr.trim());
  if (isNaN(convertedGrade)) {
    return false;
  };
  if (convertedGrade < 0 || convertedGrade > 10) {
    return false;
  };

  return true;
}

function getArrayMean (numberArray) {
  const arrayMean = numberArray.reduce((acc, cur, ind) => {
    if (ind === numberArray.length-1) {
      acc += cur;
      return acc / numberArray.length;
    }
    return acc + cur;
  });

  return arrayMean;
}

function getSituation (mean) {
  if (mean >= 7) {
    return 'APROVADO';
  } else if (mean >= 5) {
    return 'RECUPERAÇÃO';
  } else {
    return 'REPROVADO'
  };
}

// Main code
console.log('----------SISTEMA DE MÉDIAS----------')
console.log('Insira abaixo suas notas semestrais para saber a sua média final.\n')

const userGrades = get2Grades();
const gradesMean = getArrayMean(userGrades);
const studentSituation = getSituation(gradesMean);

console.log(`\nCom as notas ${userGrades[0]} e ${userGrades[1]}, a média do aluno é ${gradesMean}.`)
console.log(`O aluno está ${studentSituation}.\n`);

prompt('Aperte Enter para finalizar.');
