var React = require('react-native');
var styles = require('./Styles');
var IP_address = require('../../environment.js').IP_address;

var {
  Component,
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

class Rating extends Component{
  constructor(props) {
    super(props);
    this.state = {
      feeback: ' '
    };
  }

  ratingHandler(rating){
    console.log('user gives this rating: ', rating);
    var url = `${IP_address}/rate`;
    console.log('post rating end point', url);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.match.username,
        rating: rating
      })
    })
    .then(function(res){
      console.log('this is the response', res);
    }.bind(this));

    var response = ['','Sorry to hear that...', 'We\'ll do better!', 'Awesome!', ];
    this.setState({
      feedback: `${response[rating]}\nThank you for your feedback!`
    })
  }

  goHome() {
    console.log('passed props ', this.props)
    var Welcome = require('./welcome.js');
    this.props.navigator.push({
      title: 'Welcome!',
      component: Welcome,
      passProps: this.props
    });
  }

  render(){
    var imageLinkMatch = this.props.match.profileImage || `${IP_address}/users/${this.props.match.username}/profilePhoto`;
    // var imageLinkMatch = 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/10899304_1426072301036564_994441959_n.jpg';
    return (
      <View style={styles.mainContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{uri: imageLinkMatch}} style={styles.avatarMatch} />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.ratingHandler.bind(this, 3)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>Love to hang out again!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.ratingHandler.bind(this, 2)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>Meh...</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.ratingHandler.bind(this, 1)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>That was terrible! / No show...</Text>
        </TouchableHighlight>

        <Text style={styles.feedbackText}>{this.state.feedback}</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={this.goHome.bind(this)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>Home</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Rating;