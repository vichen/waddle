var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;
var Selfie = require('./selfie');
var styles = require('./Styles');

var {
  View,
  Animated,
  Text,
  StyleSheet,
  Component,
  TextInput,
  Image,
  DeviceEventEmitter,
  TouchableHighlight
} = React;


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      funFact: '',
      email: '',
      keyboardOffset: new Animated.Value(0),
      error: false
    };
  }

  componentDidMount() {
    _keyboardWillShowListener = DeviceEventEmitter.addListener('keyboardWillShow', (e) => this._keyboardWillShow(e));
    _keyboardWillHideListener = DeviceEventEmitter.addListener('keyboardWillHide', (e) => this._keyboardWillHide(e));
  }

  componentWillUnmount() {
    _keyboardWillShowListener.remove();
    _keyboardWillHideListener.remove();
  }

  _keyboardWillShow(e) {
    Animated.spring(this.state.keyboardOffset, {
        toValue: e.endCoordinates.height,
        friction: 6
      }).start();
  }

  _keyboardWillHide(e) {
    Animated.spring(this.state.keyboardOffset, {
        toValue: 0,
        friction: 6
      }).start();
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
        leftButton: "Signup",
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
      <Animated.View style={[styles.mainContainer, {marginBottom: this.state.keyboardOffset}]}>
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
            autoCorrect={false}
            placeholder='Email'
            placeholderTextColor={placeholderColor}
            onChange={this.handleEmailChange.bind(this)}/>          
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNewUser.bind(this)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>Take a selfie -></Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

module.exports = Signup;
