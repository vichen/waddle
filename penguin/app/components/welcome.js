// The landing page after login / new user flow. Greets the user and lets them request a match.

var React = require('react-native');
var Loading = require('./loading');
var styles = require('./Styles');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight
} = React;

class Welcome extends Component{
  handleSubmit(){
    console.log('you did it, you pushed the lunch buddy button');
    // do stuff w/ navigator
    this.props.navigator.push({
      title: "Finding you a match",
      component: Loading,
      passProps: {username: this.props.username}
    });
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>welcome, {this.props.firstName || 'rando'}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#F3D9BF">
          <Text style={styles.buttonText}>gimme a lunch buddy</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = Welcome;
