/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  */
 // 'use strict';

 // var React = require('react-native');
 // var {
 //  AppRegistry,
 //  StyleSheet,
 //  Text,
 //  View,
 //  ActivityIndicatorIOS,
 //  Component,
 //  NavigatorIOS,
 //  Navigator,
 // } = React;

 // var Main = require('./app/components/main');
 // var Welcome = require('./app/components/welcome');
 // var AuthService = require('./app/components/AuthService');
 // var styles = require('./app/components/Styles');

 // var penguin = React.createClass({
 //   componentDidMount: function(){
 //     AuthService.getAuthInfo((err, authInfo)=> {
 //       this.setState({
 //         checkingAuth: false,
 //         isLoggedIn: authInfo != null
 //       })
 //     });
 //   },

 //   render: function() {
 //     if(this.state.checkingAuth){
 //       return (
 //         <View style={styles.mainContainer}>
 //           <ActivityIndicatorIOS
 //             animating={true}
 //             size="large"
 //             style={styles.loader} />
 //         </View>
 //       );
 //     }

 //     if(this.state.isLoggedIn){
 //       return (
 //         <Welcome />
 //       );
 //     } else{
 //       return (
 //         <Navigator
 //           initialRoute={{
 //             title: 'Sign in with Waddle',
 //             component: Main,
 //             passProps: {}
 //           }}
 //           configureScene={() => {
 //             return Navigator.SceneConfigs.FloatFromRight;
 //           }}
 //           renderScene={(route, navigator) => {
 //             // count the number of func calls
 //             const Component = route.component
 //             return (
 //               <View style={{flex: 1}}>
 //                 <Component navigator={navigator} route={route} {...route.passProps}/>
 //               </View>
 //             )
 //           }}
 //         />
 //       );
 //     }
 //   },
 //   onLogin: function(){
 //     this.setState({isLoggedIn: true});
 //   },
 //   getInitialState: function(){
 //     return {
 //       isLoggedIn: false,
 //       checkingAuth: true
 //     }
 //   }
 // });

 // AppRegistry.registerComponent('penguin', () => penguin);


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
          component: Main,
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
