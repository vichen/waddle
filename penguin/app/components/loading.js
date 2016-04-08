var React = require('react-native');

var {
  ActivityIndicatorIOS,
  View,
  Text,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#48BBEC'
  },
  loadingText: {
    marginTop: 100,
    marginBottom: 150,
    fontSize: 40
  }
});

var Loading = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.loadingText}>Finding you your best match...</Text>
      <ActivityIndicatorIOS
      animating={true}
      color="black"
      size="large"
      style={{transform: [{scale: 3}]}}>
      </ActivityIndicatorIOS>
    </View>
  )
}

module.exports = Loading;