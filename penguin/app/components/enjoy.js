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
    var imageLinkMe = `${IP_address}/users/${this.props.username}/profilePhoto`;
    var imageLinkMatch = `${IP_address}/users/${this.props.match.username}/profilePhoto`;
    return (
      <View style={styles.mainContainer}>
        <Image source={{uri:"http://blogs-images.forbes.com/briansolomon/files/2014/05/cmg_fd_steakbowl_300-e1400181721565.jpg"}}
          style={styles.backgroundImage}
        />
        <View style={styles.avatarContainer}>
          <Image source={{uri: imageLinkMe}} style={styles.avatarMatch} />
          <Image source={{uri: imageLinkMatch}} style={styles.avatarMatch} />
        </View>
        <Text style={styles.title}> Enjoy you lunch!</Text>
      </View>
    )
  }
}

module.exports = Enjoy;