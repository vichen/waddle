var requestHandler = require('./requestHandler.js');
var passport = require('passport');

module.exports = function (app, express) {

  app.get('/', requestHandler.getHome);
  app.get('/signin', requestHandler.getSignin);
  app.post('/signin', requestHandler.postSignin);
  app.post('/signup', requestHandler.postSignup);
  app.get('/match', requestHandler.getMatch);
  app.get('/users/:username/profilePhoto', requestHandler.getProfilePhoto);
  app.get('/users/:username', requestHandler.getUserInfo);
  app.post('/upload', requestHandler.upload);

  // facebook authentication
  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/signin' }),
    function(req, res) {
      // Successful authentication, redirect home.
      console.log('app.get /auth/facebook/callback res: ', res);
      res.redirect('/');
    });

};
