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
  Image,
  TouchableHighlight
} = React;

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
    marginBottom: 10,
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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      funFact: '',
      email: '',
      error: false
    };
  }

  handleNewUser(){
    console.log('new user!');

    var url = env + 'signup';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.username
      })
    })
    .then(function(res){
      console.log('this is the response: ', res);
      // TODO: handle duplicate usernames
      this.props.navigator.push({
        title: "Take a selfie!",
        component: Selfie,
        passProps: {
          username: this.props.username,
          firstName: this.state.firstName,
          funFact: this.state.funFact,
          email: this.state.email
        }
      });
    }.bind(this));

  }

  handleNameChange(e) {
    this.setState({
      firstName: e.nativeEvent.text
    });
  }


  handleFunFactChange(e) {
    this.setState({
      funFact: e.nativeEvent.text
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.nativeEvent.text
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Tell us a little about yourself</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder={'First name'}
          onChange={this.handleNameChange.bind(this)}/>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          placeholder='A fun fact'
          onChange={this.handleFunFactChange.bind(this)}/>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            placeholder='Email'
            onChange={this.handleEmailChange.bind(this)}/>          
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNewUser.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>Take a selfie -></Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Signup;
