// This scene displays the results of the server's matching algorithm. Shows a mapview of a restaurant that is convenient
// for both matches, as well as the name and address. There is also a button users can use to indicate that they've reached
// the restaurant. In the future, we may want to augment this with geofencing (e.g. disable the button until the user
// is close enough, or even automatically move on to the next screen).

var React = require('react-native');

var {
  Component,
  View,
  Text,
  MapView,
  TouchableHighlight,
  StyleSheet
} = React;

var Match = require('./match');
var styles = require('./Styles');

class Results extends Component{
  constructor(props) {
    super(props);
    this.state = {
      onMyWay: true,
      coordinates: {
        latitude: this.props.restaurant.location.lat,
        longitude: this.props.restaurant.location.lng
      },
      match: this.props.match
    };

    setTimeout(() => {
      this.setState({
        onMyWay: false
      })
    }, 2000);
  }

  submitHandler(){
    this.props.navigator.push({
      title: 'Match made!',
      component: Match,
      passProps: {
        username: this.props.username,
        match: this.props.match
      }
    });
  }

  render() {
    console.log('here is the restaurant info from server: ', this.props.restaurant);
    return (
      <View>
        <MapView 
        showsUserLocation={true}
        // followUserLocation={true} 
        // even though default is true, must manually set followUserLocation to get autozoom
        region={this.state.coordinates}
        maxDelta={0.15}
        style={styles.map}
        annotations={[this.state.coordinates]}
        >
        </MapView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Here's the restaurant. Be there in 5 minutes, or else...</Text>
          <Text style={styles.resultsText}>Restaurant: {this.props.restaurant.name}</Text>
          <Text style={styles.resultsText}>Address: {this.props.restaurant.location.address}</Text>
          <TouchableHighlight
            disabled={this.state.onMyWay}
            style={styles.button}
            underlayColor="#f9ecdf"
            onPress={this.submitHandler.bind(this)}>
            <Text style={styles.buttonText}>I'm here</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = Results;