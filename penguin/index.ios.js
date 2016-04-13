/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  Navigator,
  View
} from 'react-native';

// import * as Main from './app/components/main';

var Main = require('./app/components/main');
var Temp = require('./app/components/results');

var NavigationBarRouteMapper = { 
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text style={styles.navBarText} onPress={navigator.pop}>{ route.leftButton }</Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text style={styles.navBarText}>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text style={styles.navBarText}>{ route.rightButton }</Text>
    )
  }
}

class penguin extends Component {
  render() {

    return (
      <Navigator
        initialRoute={{
          title: 'Sign in with Waddle',
          component: Main
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          // count the number of func calls
          console.log(route, navigator); 

          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar 
            routeMapper={ NavigationBarRouteMapper } 
            style={styles.navBar}
          />
        } 
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  navBar: {
    backgroundColor: 'transparent',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: "white",
    marginHorizontal: 15
  }
});

AppRegistry.registerComponent('penguin', () => penguin);
