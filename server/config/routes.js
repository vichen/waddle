var requestHandler = require('./requestHandler.js');

module.exports = function (app, express) {

  app.get('/', requestHandler.getHome);
  app.get('/signin', requestHandler.getSignin);
  app.get('/match', requestHandler.getMatch);

};