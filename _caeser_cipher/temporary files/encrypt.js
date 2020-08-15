/* Formato de input
   {
     message: x,
     step: intNumber
   };
*/

const container = {
  message: 'Teste Fatal',
  step: 4
};

function encrypt(container) {
  let encryptedMessage = '';

  for (const ch of container.message) {
    const chAsciiCode = ch.charCodeAt(0);

    if ((chAsciiCode >= 65 && chAsciiCode <= 90) || (chAsciiCode >= 97 && chAsciiCode <= 122)) {
      const step = container.step % 26;
      const newChar = getNewChar(chAsciiCode + step, ch);

      encryptedMessage += String.fromCharCode(newChar);
    } else {
      encryptedMessage += ch;
    }
  };

  return encryptedMessage;
};

function getNewChar(asciiValue, oldChar) {
  if (oldChar === oldChar.toUpperCase()) {
    if (asciiValue < 65) { return asciiValue + 26 }
    else if (asciiValue > 90) { return asciiValue - 26 }
    else { return asciiValue }
  } else {
    if (asciiValue < 97) { return asciiValue + 26 }
    else if (asciiValue > 122) { return asciiValue - 26 }
    else { return asciiValue}
  };
}

console.log(encrypt(container));
