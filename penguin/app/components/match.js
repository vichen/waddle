// Displays a picture of the user's match once the user has indicated that they're at the restaurant. Also shows the
// match's name and fun fact. There is a button to indicate that you've found your match, which will eventually take you
// to an icebreaker / enjoy your lunch screen.

var React = require('react-native');

var {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

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
    borderRadius: 40
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

class Match extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var imageLink = 'http://159.203.254.178:8000/users/' + this.props.match.username +'/profilePhoto';
    console.log(imageLink);
    return (
      <View style={styles.mainContainer}>
        <Image 
        source={{uri: imageLink}}
        // resizeMode="cover"
        onLoadEnd={()=>{console.log('image actually loaded, so........')}}
        style={styles.image}
        />
        <Text>Here's your match!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{console.log('you found them!')}}
          underlayColor="magenta">
          <Text style={styles.buttonText}>I found them!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Match;
