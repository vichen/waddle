var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#424D73'
  },
  title: {
    marginBottom: 20,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    color: '#E89C51'
  },
  textInput: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    fontFamily: 'Raleway-Light'
  },
  buttonText: {
    fontSize: 22,
    color: '#DD8342',
    alignSelf: 'center',
    fontFamily: 'Raleway-Bold'
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

