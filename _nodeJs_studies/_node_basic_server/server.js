const http = require('http');

const server = http.createServer((req, res) => {
    const responses = {};
    responses['/'] = '<h1>Home</h1>';
    responses['/contato'] = '<h1>Contato</h1>';
    responses['/sobre'] = '<h1>Sobre</h1>';
    responses['invalidUrl'] = '<h1>URL inválida.<h1>';

    res.end(responses[req.url] || responses['invalidUrl']);
});

server.listen(3001, 'localhost', () => {
    console.log('Servidor em: http://localhost:3001');
    console.log('Para desligar o servidor, aperte Ctrl + C.');
})