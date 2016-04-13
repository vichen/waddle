// The loading page once a match has been requested. This page makes an immediate GET request to the server
// requesting a match. Then, after a period of time, it makes a second GET request to see if a match was found.
// Currently, there is no flow for when a match is not found.

var React = require('react-native');
var IP_address = require('../../environment.js').IP_address;

var {
  ActivityIndicatorIOS,
  View,
  Text,
  Component,
  StyleSheet
} = React;

var Results = require('./results');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#48BBEC'
  },
  loadingText: {
    marginTop: 100,
    marginBottom: 150,
    fontSize: 40
  }
});

class Loading extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      restaurant: false,
      match: false
    };

    // When the loading page opens, find user location and send it in GET headers to server
    this.requestMatch();

    // 5 seconds later, retrieve match from server and setState to include it
    setTimeout(() => {
      this.retrieveMatch();
    }, 10000);

  }

  requestMatch() {
    // NOTE: React Native / Xcode / Xcode simulator are all a bit weird about location...
    // If you see errors when first trying to get a user's current location:
      // open the simulator, go to Debug menu > Location > Custom Location > 37.783610, -122.409002 (Hack Reactor's coordinates)
    // You can also try messing with the Xcode location settings:
      // open Xcode, go to Debug menu > Simulate Location > SF

    navigator.geolocation.getCurrentPosition((position) => {
      console.log('loading.js user current location is', position);
      console.log('loading.js request a match end point: ',`${IP_address}/match`);
      fetch(`${IP_address}/match`, {
        headers: {
          requestType: 'request-match',
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          username: this.props.username
        }
      })
        .catch((err) => {
          console.log('error requesting match', err);
        });
    });
  }

  retrieveMatch() {
    console.log('loading.js retrieving a match end point: ',`${IP_address}/match`);
    fetch(`${IP_address}/match`, {
      headers: {
        username: this.props.username,
        requestType: 'retrieve-match'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('this is the json:', json);
        this.setState({restaurant: json.restaurant});
        this.setState({match: json.firstMatchedUsername.username !== this.props.username ? json.firstMatchedUsername : json.secondMatchedUsername});
        console.log('the important thing:', this.state.match);
        this.handleMatch();
      })
      .catch((err) => {
        console.log('error retrieving match', err);
      });
  }

  handleMatch() {
      this.setState({isLoading: false});
      this.props.navigator.push({
        title: 'Results',
        component: Results,
        passProps: {
          restaurant: this.state.restaurant,
          match: this.state.match
        }
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.loadingText}>Finding you your best match...</Text>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="black"
          size="large"
          style={{transform: [{scale: 3}]}}>
        </ActivityIndicatorIOS>
      </View>
    )    
  }
}

module.exports = Loading;