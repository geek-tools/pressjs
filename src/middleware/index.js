const path = require('path');

const public = require('./public');
const admin = require('./admin');
const setup = require('./setup');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '../views'));
  app.use('/', public.home());
  app.use('/admin', admin());
  app.use('/setup', setup());
};
