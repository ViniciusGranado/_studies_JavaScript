// Functions
function grades (sit = false, ...args) {
  const date = {};

  date.total = args.length;
  date.maior = maxArray(args);
  date.menor = minArray(args);
  date.média = meanArray(args);

  if (sit) {
    if (date.média < 5) {
      date.situação = 'Abaixo da média';
    } else if (date.média < 7) {
      date.situação = 'Dentro da média';
    } else {
      date.situação = 'Acima da média';
    };
  };

  return date;
}

function maxArray (array) {
  return array.reduce((acc, cur) => Math.max(acc, cur));
}

function minArray (array) {
  return array.reduce((acc, cur) => Math.min(acc, cur));
}

function meanArray (array) {
  const sumArray = array.reduce((acc, cur) => acc + cur);

  return sumArray / array.length;
};

// Main code
const classData = grades(true, 1, 8, 8, 4, 4, 3, 8);
console.log(classData);
