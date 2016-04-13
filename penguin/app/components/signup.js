var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;

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
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#424D73'
  },
  title: {
    marginBottom: 20,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold'
    color: '#E89C51'
  },
  textInput: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    fontFamily: 'Raleway-Light'
  },
  buttonText: {
    fontSize: 22,
    color: '#DD8342',
    alignSelf: 'center'
    fontFamily: 'Raleway-Bold'
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

    var url = `${IP_address}/signup`;
    console.log('signup.js handleNewUser end point: ', url);

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
    var placeholderColor = '#888FA7';
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Tell us a little about yourself</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder={'First name'}
          placeholderTextColor={placeholderColor}
          onChange={this.handleNameChange.bind(this)}/>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          placeholder='A fun fact'
          placeholderTextColor={placeholderColor}
          onChange={this.handleFunFactChange.bind(this)}/>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            placeholder='Email'
            placeholderTextColor={placeholderColor}
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
