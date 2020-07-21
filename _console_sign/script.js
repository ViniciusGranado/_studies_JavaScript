// Module import
const prompt = require('prompt-sync')();

// Functions
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function sign (message) {
  const canvas = ' '.repeat(28);
  const sentence = message;
  
  let canvasIndexStart = 0
  let canvasIndexEnd = canvas.length - 1;
  
  let sentenceIndexStart = 0;
  let sentenceIndexEnd = 1;
  
  let padding = 1;

  while (true) {
    console.clear();

    const signMessage = '|' + canvas.substr(canvasIndexStart, canvasIndexEnd) + sentence.substr(sentenceIndexStart,sentenceIndexEnd).padEnd(padding) + '|';

    console.log('-'.repeat(canvas.length + 2));
    console.log(signMessage);
    console.log('-'.repeat(canvas.length + 2));

    canvasIndexEnd--;
    
    if (sentenceIndexEnd >= canvas.length) {
      sentenceIndexStart++;
    } else {
      sentenceIndexEnd++;
      padding++;
    };

    sleep(100);
  
    // Restart loop
    if (sentenceIndexStart === sentence.length + 1) {
      canvasIndexStart = 0;
      canvasIndexEnd = canvas.length - 1;
  
      sentenceIndexStart = 0;
      sentenceIndexEnd = 1;

      padding = 1;
    };
  };
};

sign(prompt('Digite sua mensagem: '));
