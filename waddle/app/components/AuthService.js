var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;
var AsyncStorage = require('react-native').AsyncStorage;

class AuthService {

    login(creds, cb){
        var url = `${IP_address}/signin`
        // var url = 'http://localhost:8000/signin';
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: creds.email,
              password: creds.password
            })
        })
        .then((res)=> {
            if(res.status >= 200 && res.status < 300){
              console.log('login returns this res: ', res);
              console.log('res.token: ', res.token);

              return res.json();
                
            }

            throw {
                badCredentials: res.status === 401,
                unknownError: res.status !== 401
            }
        })
        .then((data)=> {
          AsyncStorage.setItem('token', data.token);
          return cb({success: true});
        })
        .catch((err)=> {
            return cb(err);
        });
    }

    logout() {
      var url = `${IP_address}/logout`
      fetch(LOGOUT_REQUEST_URL, {
        method: 'GET'
      }).then(function () {
        AsyncStorage.remove('token');
      });
    }


}

module.exports = new AuthService();