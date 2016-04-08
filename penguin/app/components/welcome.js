var React = require('react-native');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#48BBEC'
  },
  welcomeText: {
    fontSize: 80
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 130,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
});

class Welcome extends Component{
  handleSubmit(){
    console.log('you did it, you pushed the lunch buddy button');
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>welcome, {this.props.name || 'rando'}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>gimme a lunch buddy</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = Welcome;