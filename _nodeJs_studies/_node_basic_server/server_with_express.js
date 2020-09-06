const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

server.get('/contato', (req, res) => {
  res.send(`<h1>Contato</h1>

            <form action='/contato' method='POST'>
              <label for='email'>Email:</label>
              <input type='email' name='email' id='email'>

              <label for='mensagem'>Mensagem:</label>
              <input type='mensagem' name='mensagem' id='mensagem'>

              <input type='submit' value='Enviar'>
            </form>
  `);
});

server.post('/contato', (req, res) => {
  res.send('<h1>Mensagem enviada.</h1>');
});

server.listen(3001, () => {
  console.log('Servidor em http://localhost:3001');
  console.log('Para desligar: Ctrl + C');
});
