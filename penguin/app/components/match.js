// Displays a picture of the user's match once the user has indicated that they're at the restaurant. Also shows the
// match's name and fun fact. There is a button to indicate that you've found your match, which will eventually take you
// to an icebreaker / enjoy your lunch screen.

var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;
var styles = require('./Styles');

var {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

class Match extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var imageLink = `${IP_address}/users/${this.props.match.username}/profilePhoto`;
    console.log('match.js link to image: ', imageLink);
    return (
      <View style={styles.mainContainer}>
        <Image 
        source={{uri: imageLink}}
        // resizeMode="cover"
        onLoadEnd={()=>{console.log('image actually loaded, so........')}}
        style={styles.image}
        />
        <Text style={styles.title}>Here's your match!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{console.log('you found them!')}}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>I found them!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Match;
