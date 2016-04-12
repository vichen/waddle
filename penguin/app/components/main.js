// The first page you see when you open the app. Lets you log in (eventually with facebook),
// then directs you to the welcome page (if you're already in our db) or through the new user flow.

// Flowchart of scenes in the app:
// (made on http://asciiflow.com/)

// +------------+
// |Main / login|
// +-----+------+
//       |
//       |   new user    +------------+
//       +--------------->Tell us more+-----+
//       |               +------------+     |
//       |                                  |
//       |                                  |
//   +---v---+                           +--v---+
//   |Welcome<-----+                     |Selfie|
//   +---+---+     |                     +--+---+
//       |         |      +---------+       |
//       |         +------+LooksGood<-------+
//       |                +---------+
//   +---v---+
//   |Loading|
//   +---+---+
//       |
//       |
//       |
//   +---v---+
//   |Results|
//   +---+---+
//       |
//       |
//       |
//    +--v--+
//    |Match|
//    +-----+


var React = require('react-native');
var env = {
  'development': 'http://localhost:8000/',
  'production': 'http://159.203.254.178:8000/'
}[process.env.NODE_ENV];


var {
  View,
  Text,
  StyleSheet,
  Component,
  TextInput,
  TouchableHighlight
} = React;

var Welcome = require('./welcome');
var Signup = require('./signup');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  textInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      error: false
    };
  }

  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text
    });
  }

  handleSubmit(){  
    console.log('insert OAuth integration here');
    var url = env + 'signin';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
    .then(function(res){
      var isInvalid = /[\s&<>"'`=\/]/g.test(this.state.username);
      if (res.status == 200) {
        this.setState({
          error: false
        });
        this.props.navigator.push({
          title: "Welcome",
          component: Welcome,
          passProps: {name: this.state.username}
          // make it impossible to go back to sign in screen
          // passProps: {userInfo: res} 
          // should pass user ID, other details as received from OAuth
        });
      } else if (isInvalid) {
        this.setState({
          error: 'Invalid Username\n Please only use alphanumeric characters'
        });
      } else {
        this.props.navigator.push({
          title: 'Signup',
          component: Signup,
          passProps: {username: this.state.username}
        })
      }
    }.bind(this));

  }


  render(){
    var showErr = ( this.state.error ? <Text> {this.state.error} </Text> : <View></View> );
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Username'
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
        {showErr}
      </View>
    )
  }
};

module.exports = Main;
