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
    // var imageLink = `${IP_address}/users/${this.props.match.username}/profilePhoto`;
    var imageLink = 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10899304_1426072301036564_994441959_n.jpg';
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
        <Text style={styles.resultsText}>First Name: Poncho</Text>
        <Text style={styles.resultsText}>Fun Fact: is a foodie</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{console.log('you found them!')}}
          underlayColor="#F3D9BF">
          <Text style={styles.buttonText}>I found them!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Match;
