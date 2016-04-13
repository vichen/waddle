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
    color: '#E89C51',
    padding: 20
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
  },
  image: {
    alignSelf: 'center',
    height: 240,
    width: 240,
    borderRadius: 120,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: "blue",
    padding: 30
  },
  welcomeText: {
    marginTop: 30, 
    fontSize: 48,
    fontFamily: 'Raleway-Light',
    color: 'white'
  },
  loadingText: {
    marginTop: 30,
    marginBottom: 50,
    fontSize: 40,
    fontFamily: 'Raleway-Light',
    color: 'white'
  },
  resultsText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    fontFamily: 'Raleway-Light',
    color: 'white'
  },
  map: {
    height: 360,
    marginTop: 50,
  }
});

