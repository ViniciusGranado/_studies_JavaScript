const express = require('express');
const handlebars =  require('express-handlebars');
const bodyParser = require('body-parser');

const server = express();

//Config
  //Template Engine
  server.engine('handlebars', handlebars({defaultLayout: 'main'}));
  server.set('view engine', 'handlebars');

  //Body Parser
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());



// Routes
server.get('/register', (req, res) => {
  res.render('form');
});

server.post('/register', (req, res) => {
  res.send(`Title: ${req.body.title} Content: ${req.body.content}`);
});

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
  console.log('To exit: CTRL + C');
});