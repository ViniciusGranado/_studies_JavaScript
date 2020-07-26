// Functions
function draw () {
  const values = [];

  for (let i = 0; i < 5; i++) {
    console.clear();
    values.push(Math.floor(Math.random() * (101 - 0)));

    console.log(`Sorteando 5 valores na lista: ${values.join(', ')}`);

    sleep(400);
  };

  return values;
}

function sumEven (numbersArray) {
  const evenSum = numbersArray.reduce((acc, cur) => {
    if (cur % 2 === 0) { return acc + cur };
    return acc;
  }, 0);

  console.log(`Somando os valores de [${numbersArray.join(', ')}], temos ${evenSum}.`);
}

function sleep (milliseconds) {
  const date = Date.now();
  let currentDate;

  do {
    currentDate = Date.now();
  } while ((currentDate - date) < milliseconds);

}

// Main code
const valuesArray = draw();
sumEven(valuesArray);
