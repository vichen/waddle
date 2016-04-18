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
var styles = require('./app/components/Styles');
var Temp = require('./app/components/enjoy'); // used temporarily for working on styling

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

AppRegistry.registerComponent('penguin', () => penguin);
