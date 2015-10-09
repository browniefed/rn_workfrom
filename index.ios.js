var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var App = require('./app/app');

var rn_workfrom = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('rn_workfrom', () => rn_workfrom);
