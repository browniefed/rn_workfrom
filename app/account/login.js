var React = require('react-native');
var API = require('../api');

var {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} = React;

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '' 
    };
  },
  handleSignup: function() {
    if (!this.state.email) return;
    API.loginWithEmail(this.state.email, () => this.props.replaceRoute('loginSuccess'));
  },
  render: function() {

      return (
          <View style={[styles.container, styles.center]}>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text>Email</Text>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                  />
                </View>
              </View>

              <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
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
    form: {
      width: 300
    },
    input: {
      height: 30,
      flex: 1
    }

})
module.exports = Login;