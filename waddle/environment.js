<<<<<<< 202a2d378b4f0cf952eef08c442e34d343d94231
=======
// var env = 'production';
var env = require('./env.js');
console.log('Node environment is... ', env)

>>>>>>> add back uber client key
// this file specifies the address to the app server serving http requests
var env = require('./env.js');
console.log('Node environment is... ', env)

var _Environments = {
  development: {
      IP_address: 'http://localhost:8000'
  }, 
  production: {
      IP_address: 'https://waddlingllama.herokuapp.com'
  }
};

var getEnvironment = function() {
  var platform = env;
  return _Environments[platform];
};

var Environment = getEnvironment();
module.exports = Environment;