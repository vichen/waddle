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

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
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
  },
  map: {
    height: 300,
    margin: 10,
    marginTop: -100,
    borderRadius: 15,
  }
});

class Results extends Component{
  constructor(props) {
    super(props);
    this.state = {
      onMyWay: true,
      coordinates: {
        latitude: this.props.restaurant.location.lat,
        longitude: this.props.restaurant.location.lng
      }
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
      component: Match
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
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
        <Text>Here's the restaurant. Be there in 5 minutes, or else...</Text>
        <Text>{this.props.restaurant.name}</Text>
        <Text>{this.props.restaurant.location.address}</Text>
        <TouchableHighlight
          disabled={this.state.onMyWay}
          style={styles.button}
          underlayColor="purple"
          onPress={this.submitHandler.bind(this)}>
          <Text style={styles.buttonText}>I'm here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Results;