var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Component,
  TextInput,
  TouchableHighlight
} = React;

var Welcome = require('./welcome');
var Selfie = require('./selfie');

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
    var url = 'http://localhost:8000/signin';
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
      console.log('this is the response: ', res);
      // if 200
      if (res.status == 200) {
        this.setState({
          error: false
        });
        // push to welcome
        this.props.navigator.push({
          title: "Welcome",
          component: Welcome,
          passProps: {name: this.state.username}
          // make it impossible to go back to sign in screen
          // passProps: {userInfo: res} 
          // should pass user ID, other details as received from OAuth
        });
      // else 401
      } else {
        this.setState({
          error: 'Invalid Username'
        });
      }
        // username doesn't exist
    }.bind(this));

  }

  handleNewUser(){
    console.log('new user!');
    this.props.navigator.push({
      title: "Take a selfie!",
      component: Selfie,
      passProps: {name: this.state.username}
    });
  }

  render(){
    var showErr = ( this.state.error ? <Text> {this.state.error} </Text> : <View></View> );
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Username'
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNewUser.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>I'm new here</Text>
        </TouchableHighlight>
        {showErr}
      </View>
    )
  }
};

module.exports = Main;
