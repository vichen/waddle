var React = require('react-native');

var {
  Component,
  View,
  Text,
  MapView,
  TouchableHighlight,
  StyleSheet
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
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

class Results extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <MapView 
        showsUserLocation={true}
        region={{
          latitude: 39.06,
          longitude: -95.22,
        }}
        style={styles.map}
        >
        </MapView>
        <Text>Here's the restaurant.Be there in 5 min. or else...</Text>
      </View>
    );
  }
}

module.exports = Results;