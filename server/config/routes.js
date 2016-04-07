module.exports = function (app, express) {

  app.get('/', function (req, res) { res.send('Hello World!'); });
  app.get('/signin', function (req, res) { res.send('signing in...'); });
  app.get('/match', function (req, res) { res.send('Matching...'); });

};