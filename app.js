const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/books').get((req, res) => {
  res.send('Hello books');
});

app.use('/', bookRouter);

app.get('/', (req, res) => {
  res.render('index', {
    page: 'Home',
    title: 'Library',
    list: ['a', 'b']
  });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
