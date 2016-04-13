var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;
var Selfie = require('./selfie');
var styles = require('./Styles');

var {
  View,
  Text,
  StyleSheet,
  Component,
  TextInput,
  Image,
  TouchableHighlight
} = React;

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
    console.log(styles.mainContainer);
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
