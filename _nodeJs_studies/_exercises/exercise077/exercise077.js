// Functions
function showVowelsOfWordsList (wordsArray) {
  const vowels = 'AÁÀÃÂÉÊIÍOÔÕÓUÚ';

  for (const i of wordsArray) {
    const vowelsInWord = [];

    for (const c of i) {
      if (vowels.includes(c.toUpperCase())) {
        vowelsInWord.push(c.toUpperCase());
      }
    }

    console.log(`Na palavra ${i} temos as vogais: ${vowelsInWord.join(' ')}.`);
  }
}

// Main code
const words = ['Aprender', 'Programar', 'Linguagem', 'Python', 'Curso', 'Grátis', 'Estudar', 'Praticar', 'Trabalhar', 'Mercado', 'Programador', 'Futuro']

showVowelsOfWordsList(words);
