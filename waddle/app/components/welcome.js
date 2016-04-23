// The landing page after login / new user flow. Greets the user and lets them request a match.

var React = require('react-native');
var Main = require('./main');
var Loading = require('./loading');
var IP_address = require('../../environment.js').IP_address;
var styles = require('./Styles');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight,
  Image,
  AsyncStorage,
  Navigator
} = React;

class Welcome extends Component{

  handleSubmit(lunchOrCoffee){
    console.log('you did it, you pushed the lunch buddy button');
    // do stuff w/ navigator
    this.props.navigator.push({
      title: "Finding you a match",
      component: Loading,
      passProps: {
        lunchOrCoffee: lunchOrCoffee,
        ...this.props
      }
    });
  }

  handleLogout() {
    AsyncStorage.removeItem('token');
    this.props.navigator.immediatelyResetRouteStack(this.props.navigator.getCurrentRoutes().slice(0, -1));
  }

  takeProfilePic() {
    console.log('lets take a new profile pic')
    var Selfie = require('./selfie');
    this.props.navigator.push({
      title: "Take a selfie!",
      // leftButton: "Signup",
      component: Selfie,
      passProps: this.props
    });
  }

  render(){
    var imageLink = this.props.picture || `${IP_address}/users/${this.props.username}/profilePhoto?date=${Date.now()}`;
    console.log('match.js link to image: ', imageLink);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Welcome, { this.props.firstName || this.props.username}</Text>
        <TouchableHighlight
        onPress={this.takeProfilePic.bind(this)}>
          <Image 
            style={styles.avatar} 
            source={{uri: imageLink}} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this, 'lunch')}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>gimme a lunch buddy</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this, 'coffee')}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>gimme a coffee buddy</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogout.bind(this)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
        
        
      </View>
    );
  }
};

module.exports = Welcome;
