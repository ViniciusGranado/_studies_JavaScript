const express = require('express');
const serveStatic = require('serve-static');

const server = express();

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/html_test/index.html');
});

server.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/html_test/sobre.html');
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

server.get('/info/:name/:position/:color', (req, res) => {
  res.send(`<h1>Ola ${req.params.name}</h1>
            <p>O seu cargo e: ${req.params.position}.</p>
            <p>A sua cor favorita e: ${req.params.color}.</p>
            `);
});

server.listen(3001, () => {
  console.log('Servidor em http://localhost:3001');
  console.log('Para desligar: Ctrl + C');
});
