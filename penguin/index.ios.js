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
var Temp = require('./app/components/welcome'); // used temporarily for working on styling

class penguin extends Component {
  render() {

    return (
      <Navigator
        initialRoute={{
          title: 'Sign in with Waddle',
          component: Temp,
          passProps: {}
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          // count the number of func calls
          const Component = route.component
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          )
        }}
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
  }
});

AppRegistry.registerComponent('penguin', () => penguin);
