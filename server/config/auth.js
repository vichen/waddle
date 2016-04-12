// config/auth.js

var env = {
  'development': 'http://localhost:8000/',
  'production': 'http://159.203.254.178:8000/'
}[process.env.NODE_ENV];

module.exports = {
  facebookAuth: {
    clientID: '1626575457562968',
    clientSecret: '3d1fca39ae2d56c6e41d4fcab9f65149',
    callbackURL: env + "auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'] // get specific fields of user profile
  }
};
