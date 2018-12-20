const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('../routes');
const errorHandler = require('../middleware/error');

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../public')));
  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');

  app.use('/', routes);
  app.use(errorHandler);
};

//Research

// //Rewrite to conditional require
// require('./startup/prod')(app);
// const helmet = require('helmet');
// const compression = require('compression');
//
// module.exports = app => {
//   app.use(helmet());
//   app.use(compression());
// };
