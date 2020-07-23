const prompt = require('prompt-sync')();
const letters = require('./letters');

function getCanvas (sentence) {
  const canvas = [];

  for (let i = 0; i < 7; i++) {
    const char = sentence[i];

    switch (char) {
      case 'A':
        canvas.push(letters.letterA);
        break;
      case 'B':
        canvas.push(letters.letterB);
        break;
      case 'C':
        canvas.push(letters.letterC);
        break;
      case 'D':
        canvas.push(letters.letterD);
        break;
      case 'E':
        canvas.push(letters.letterE);
        break;
      case "T":
        canvas.push(letters.letterT);
        break;
      case ' ':
        canvas.push(letters.space);
        break;
    };
  };

  while (canvas.length < 7) {
    canvas.push(letters.space);
  };

  return canvas;
}

function bigPrint(sentence) {
  console.clear();
  const canvas = getCanvas(sentence.toUpperCase());

  for (let i = 0; i < 5; i++) {
    console.log(canvas[0][i] + canvas[1][i] + canvas[2][i] + canvas[3][i] + canvas[4][i] + canvas[5][i] + canvas[6][i]);
  };
}

bigPrint(prompt('Digite a sua mensagem: '));

console.log('')
prompt('Aperte Enter para finalizar.');
