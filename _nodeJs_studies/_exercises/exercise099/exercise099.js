// Functions
function highestNumber (...args) {
  console.log('------------------------------');
  console.log('Analisando valores informados...');

  if (args.length === 0) {
    console.log('Não foram informados valores.');
  } else {
    console.log(args.join(', '));

    if (args.length === 1) {
      console.log('Foi informado 1 valor ao todo.');
    } else {
      console.log(`Foram informados ${args.length} valores ao todo.`);
    }

    const highestValue = args.reduce((acc, cur) => Math.max(acc, cur));
    console.log(`O maior valor informado foi ${highestValue}`);
  }
}

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min) - min);
}
// Main code
highestNumber(randomInt(0, 51), randomInt(0, 51), randomInt(0, 51), randomInt(0, 51), randomInt(0, 51), randomInt(0, 51))

highestNumber(randomInt(0, 51), randomInt(0, 51), randomInt(0, 51))

highestNumber(randomInt(0, 51), randomInt(0, 51))

highestNumber(randomInt(0, 51))

highestNumber()
