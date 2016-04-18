var React = require('react-native');
var styles = require('./Styles');
var IP_address = require('../../environment.js').IP_address;


var {
  Component,
  View,
  Text,
  Image
} = React;

class Enjoy extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    console.log('this.props.username', this.props.username);
    console.log('this.props.match.username', this.props.match.username);
    var imageLinkMe = `${IP_address}/users/${this.props.username}/profilePhoto`;
    var imageLinkMatch = `${IP_address}/users/${this.props.match.username}/profilePhoto`;
    return (
      <View style={styles.mainContainer}>
        <Image source={{uri:"enjoy"}}
          style={styles.backgroundImage}
        />
        <View style={styles.avatarContainer}>
          <Image source={{uri: imageLinkMe}} style={styles.avatarMatch} />
          <Image source={{uri: imageLinkMatch}} style={styles.avatarMatch} />
        </View>
        <Text style={styles.title}> Enjoy your lunch!</Text>
      </View>
    )
  }
}

module.exports = Enjoy;