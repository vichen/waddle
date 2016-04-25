/* this file tells the application where to look for the http server
 (either locally or on the deployed server). Change this setting from env.js */
var env = require('./env.js');
console.log('Node environment is... ', env)

var _Environments = {
  development: {
      IP_address: 'http://localhost:8000'
      /* change 'localhost' to your local IP if you want to test
       with either an ios device or simulator on the same LAN. Leave 
       as 'localhost' if you are just testing an xcode simulator 
       on the same machine. 

       Lastly, remember that the address of the app-dev-server 
       is specified in Xcode's AppDelegate.m file, usually on port 8081. 
       Use your local IP there as well if you are testing on
       a connected ios device.  Otherwise just leave it as localhost:8081 
       if you are only running a simulator */
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