// Functions
function getRandomIntNumberBetween0and10 () {
  return Math.floor(Math.random() * 11);
}

function getFiveIntValues () {
  const randomValues = [];

  for (let i = 0; i < 5; i++) {
    randomValues.push(getRandomIntNumberBetween0and10());
  };

  return randomValues;
}

function maxArray (arrayNumbers) {
  return arrayNumbers.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
}

function minArray (arrayNumbers) {
  return arrayNumbers.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
}

// Main code
const fiveRandomNumbers = getFiveIntValues();

console.log(`Os números sorteados foram ${fiveRandomNumbers.join(', ')}.`);
console.log(`O maior valor sorteado foi ${maxArray(fiveRandomNumbers)}.`);
console.log(`O menor valor sorteado foi ${minArray(fiveRandomNumbers)}.`);
