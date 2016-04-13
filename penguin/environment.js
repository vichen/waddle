// var env = require('./.env');

// console.log(env);

var _Environments = {
  development: {
      IP_address: 'http://localhost:8000'
  }, 
  production: {
      IP_address: 'http://159.203.254.178:8000'
  }
};

var getEnvironment = function() {
  var platform = 'development';
  return _Environments[platform];
};

var Environment = getEnvironment();
module.exports = Environment;