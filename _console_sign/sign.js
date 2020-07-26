// Functions
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function sign (message) {
  const canvas = ' '.repeat(70);
  const line = message;
  
  let canvasIndexStart = 0
  let canvasIndexEnd = canvas.length - 1;
  
  let lineIndexStart = 0;
  let lineIndexEnd = 1;
  
  let padding = 1;

  while (true) {
    console.clear();
    
    console.log('-'.repeat(canvas.length + 2));
    for (let i = 0; i < 5; i++) {
      const signMessage = '|' + canvas.substr(canvasIndexStart, canvasIndexEnd) + line[i].substr(lineIndexStart,lineIndexEnd).padEnd(padding) + '|';
      
      console.log(signMessage);
    }
    console.log('-'.repeat(canvas.length + 2));
    

    canvasIndexEnd--;
    
    if (lineIndexEnd >= canvas.length) {
      lineIndexStart++;
    } else {
      lineIndexEnd++;
      padding++;
    };

    sleep(80);
  
    // Restart loop
    if (lineIndexStart === line[0].length + 1) {
      canvasIndexStart = 0;
      canvasIndexEnd = canvas.length - 1;
  
      lineIndexStart = 0;
      lineIndexEnd = 1;

      padding = 1;
    };
  };
};

module.exports = { sign };
