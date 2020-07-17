// Module import
const prompt = require('prompt-sync')();

// Functions
function getSentence (message) {
  const sentence = prompt(message);

  if (!sentence) {
    console.log('[ERRO] Tente novamente.');
  } else {
    return sentence.trim().replace(/\s/g, '').toUpperCase();
  };
}

function getBackwardsSentence (sentence) {
  let backwards = '';

  for (let i = sentence.length - 1; i >= 0; i--) {
    backwards += sentence[i];
  };

  return backwards;
}

// Main code
const userSentence = getSentence('Digite uma frase: ');
const backwardSentence = getBackwardsSentence(userSentence);

console.log(`\nO inverso de ${userSentence} é ${backwardSentence}`);
if (userSentence === backwardSentence) {
  console.log('A frase é um palíndromo.\n');
} else {
  console.log('A frase não é um palíndromo.\n');
};

prompt('Aperte Enter para finalizar.');
