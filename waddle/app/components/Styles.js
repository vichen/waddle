/* This is the global style sheet file required in every component*/
var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
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
    color: 'white',
    padding: 20,
    backgroundColor: 'transparent',
  },
  mainTitle: {
    position: 'absolute',
    top: 25,
    left: 155,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    color: 'white',
    backgroundColor: 'transparent',
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
    fontFamily: 'Raleway-Light'
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
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.20
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
  enjoyImage:{
    resizeMode: 'contain'
  },
  avatar: {
    alignSelf: 'flex-start',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "blue",
    padding: 30
  },
  avatarContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    alignSelf: 'center'
  },
  avatarMatch: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    padding: 30
  },
  welcomeText: {
    marginTop: 30, 
    marginBottom: 30, 
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

