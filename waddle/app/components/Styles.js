/* This is the global style sheet file required in every component*/
var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

var screenHeight = Dimensions.get("window").height;

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
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    color: 'white',
    padding: 10,
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
  mainBottomText: {
    position: 'absolute',
    bottom: 125,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Raleway-Light',
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
  signupButton: {
    position: 'absolute',
    bottom: 75,
    height: 45,
    width: 315,
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
  avatar: {
    alignSelf: 'flex-start',
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "blue",
    marginBottom:30
  },
  avatarContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    alignSelf: 'center'
  },
  avatarMatch: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom:30
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
  starbox: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    width: 220,
    height: 40,
    overflow: 'hidden'
  },
  starButton: {
    flexDirection: 'row'
  },
  feedbackText: {
    marginTop: 5,
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Raleway-Light',
    color: 'white'
  },
  mapContainer: {
    height: screenHeight
  },
  map: {
    height: 360
  },
  error: {
    position: 'absolute',
    bottom: 225,
    color: 'red',
    paddingTop: 10,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
    // backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  /* Messenger styles */
  messengerContainer: {
    flex: 1,
  },
  searchInput: {
    height: 50,
    padding: 12,
    marginBottom: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  messageText: {
    marginTop: 5,
    fontSize: 20,
    alignSelf: 'auto',
    fontFamily: 'Raleway-Light',
    color: 'white'
  },
  messageTextLeft: {
    marginTop: 5,
    fontSize: 25,
    alignSelf: 'flex-start',
    fontFamily: 'Raleway-Light',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    height: 35,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 22,
    paddingTop: 2,
  },
  messageTextRight: {
    marginTop: 5,
    fontSize: 25,
    alignSelf: 'flex-end',
    fontFamily: 'Raleway-Light',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    height: 35,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 22,
    paddingTop: 2,
  },
});

