// The landing page after login / new user flow. Greets the user and lets them request a match.

var React = require('react-native');
var Loading = require('./loading');
var IP_address = require('../../environment.js').IP_address;
var styles = require('./Styles');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight,
  Image
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
    var imageLink = `${IP_address}/users/${this.props.username}/profilePhoto`;
    console.log('match.js link to image: ', imageLink);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>welcome, {this.props.firstName || 'rando'}</Text>
        <Image 
          style={styles.avatar} 
          source={{uri: imageLink}} />
        <Text style={styles.resultsText}>Username: {this.props.username}</Text>
        <Text style={styles.resultsText}>Fun Fact: {this.props.funFact}</Text>
        <Text style={styles.resultsText}>Email: {this.props.email}</Text>
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
