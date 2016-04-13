// Let users see the selfie they just took. If they don't like it, they can take another one.
// If they're looking good, they can accept the selfie. This POSTS the image to the server's filesystem
// and lets the user move on to the welcome page. Currently there is no way for a user to retake a selfie
// once they've accepted it.

var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;

var {
  Component,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text
} = React;

var Welcome = require('./welcome');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 40,
    backgroundColor: "blue"
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

class LooksGood extends Component{
  constructor(props){
    super(props);
    this.state = {
      picture: props.picture
    };
  }

  handleNotLookingGood(){
    // For some reason, trying to push Selfie here did not work at all. But pop makes more sense anyway.
    this.props.navigator.pop();
  }

  handleLookingGood(){
    // do fetch POST request that includes photo
    // photo is at filepath described in this.props.picture

    // Create a special object with a
    // uri property. This will be appended
    // to formdata and sent with our post
    var photo = {
      uri: this.props.picture,
      type: 'image/jpeg',
      name: this.props.name + '_' + 'profile.jpg', // hardcoded to a specific user; CHANGE
    };

    var xhr = new XMLHttpRequest();
    var formdata = new FormData();
    formdata.append('Content-Type', 'multipart/form-data');
    formdata.append('username', this.props.username);
    formdata.append('firstName', this.props.firstName);
    formdata.append('funFact', this.props.funFact);
    formdata.append('email', this.props.email);
    formdata.append('photo', photo);

    console.log('loading.js handleLookingGood end point: ', `${IP_address}/upload`)
    xhr.open('POST', `${IP_address}/upload`);
    xhr.send(formdata);

    this.props.navigator.push({
      title: 'Welcome!',
      component: Welcome,
      passProps: {
        username: this.props.username,
        firstName: this.props.firstName
      }
    });
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text>How do you look?</Text>
        <Image 
          style={styles.image} 
          source={{uri: this.props.picture}} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLookingGood.bind(this)}>
          <Text style={styles.buttonText}>I look great!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNotLookingGood.bind(this)}>
          <Text style={styles.buttonText}>Let's try that again</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = LooksGood;
