// config/auth.js

module.exports = {
  facebookAuth: {
    clientID: '1626575457562968',
    clientSecret: '3d1fca39ae2d56c6e41d4fcab9f65149',
    callbackURL: "http://localhost:8000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'] // get specific fields of user profile
  }
};