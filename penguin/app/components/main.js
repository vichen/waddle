// The first page you see when you open the app. Lets you log in,
// then directs you to the welcome page (if you're already in our db) or through the new user flow.

// Flowchart of scenes in the app:
// (made on http://asciiflow.com/)

//          +------+
//          | Main |
//          +---+--+
//              |
//              |   new user   +------+
//              +-------------->Signup+--------+
//              |              +------+        |
//              |                              |
//          +---v---+                          |
// +-------->Welcome<-----+                 +--v---+
// |        +---+----     |                 |Selfie|
// |            |         |                 +--+---+
// |            |         |   +---------+      |
// |        +---v---+     +---+LooksGood<------+
// |        |Loading|         +---------+
// |        +---+---+
// |            |
// |  no match  |
// +------------+
//              |
//          +---v---+
//          |Results|
//          +---+---+
//              |
//              |
//           +--v--+
//           |Match|
//           +--+--+
//              |
//              |
//           +--v--+
//           |Enjoy|
//           +-----+

var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;
var styles = require('./Styles');

var {
  View,
  Text,
  StyleSheet,
  Component,
  TextInput,
  TouchableHighlight
} = React;

import Video from 'react-native-video';
var Welcome = require('./welcome');
var Signup = require('./signup');


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
    var url = `${IP_address}/signin`;
    console.log('main.js handleSubmit POST to signin: ', url);
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
        console.log('main.js handleSubmit GET userInfo end point: ', `${IP_address}/users/${this.state.username}`);
        fetch(`${IP_address}/users/${this.state.username}`, {
          method: 'GET'
        })
        .then(function(response) {
          response.json().then(function(user) {
            console.log(user);
            this.props.navigator.immediatelyResetRouteStack(this.props.navigator.getCurrentRoutes().slice(0, -1));
            this.props.navigator.push({
              title: 'Welcome',
              component: Welcome,
              passProps: {
                username: this.state.username,
                firstName: user.firstName
              }
            });
          }.bind(this));

          // make it impossible to go back to sign in screen
          // passProps: {userInfo: res} 
          // should pass user ID, other details as received from OAuth
        }.bind(this));
      } else if (isInvalid) {
        this.setState({
          error: 'Invalid Username\n Please only use alphanumeric characters'
        });
      } else {
        this.props.navigator.immediatelyResetRouteStack(this.props.navigator.getCurrentRoutes().slice(0, -1));
        this.props.navigator.push({
          title: 'Signup',
          component: Signup,
          passProps: {username: this.state.username}
        });
      }
    }.bind(this));

  }

  render(){
    var showErr = ( this.state.error ? <Text> {this.state.error} </Text> : <View></View> );
    return (
        <View style={styles.mainContainer}>
          <Video source={{uri:"background"}}
            style={styles.backgroundVideo}
            paused={false}
            rate={1} volume={1} muted={true}
            resizeMode="cover" repeat={true}

          />
          <Text style={styles.mainTitle}>waddle</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Username'
            placeholderTextColor='white'
            onChange={this.handleChange.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="#f9ecdf">
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableHighlight>
          {showErr}
        </View>
    )
  }
};

module.exports = Main;
