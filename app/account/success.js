var React = require('react-native');
var API = require('../api');

var {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} = React;

var SignupSuccess = React.createClass({
  render: function() {
      return (
          <View style={[styles.container, styles.center]}>
            <Text>You've successfully signed up, please check your email</Text>
            <TouchableOpacity onPress={() => this.props.replaceRoute('home')}>  
              <Text>Go Home</Text>
            </TouchableOpacity>
          </View>
      )
  }
});


var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },

})
module.exports = SignupSuccess;