const express = require('express');
const handlebars =  require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('../../models/Post');

const server = express();

//Config
  //Template Engine
  server.engine('handlebars', handlebars({defaultLayout: 'main'}));
  server.set('view engine', 'handlebars');

  //Body Parser
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());



// Routes
server.get('/', (req, res) => {
  Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
    res.render('home', {posts: posts});
  });
});

server.get('/register', (req, res) => {
  res.render('form');
});

server.get('/delete/:id', (req, res) => {
  Post.destroy({where: {'id': req.params.id}}).then(() => {
    res.send(`<p>Post successfully deleted.</p>
              <a href='/'><button>Home</button></a>`);
  }).catch((error) => {
    res.send('Error: This post doesn\'t exist.');
  })
});


server.post('/register', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content
  }).then(() => {
    res.redirect('/');
  }).catch((error) => {
    res.send(`Error: ${error}`);
  })
});

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
  console.log('To exit: CTRL + C');
});