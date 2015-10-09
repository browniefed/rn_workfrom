var React = require('react-native');
var Images = require('./images');

var {
    View,
    StyleSheet,
    Navigator,
    Image,
    Text
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function() {},
  RightButton: function() {},
  Title: function() {
    return (
      <Image 
        source={Images.getImage('logo-mobile')} 
        resizeMode="contain"
        style={styles.navTitle}
      />
    )
  }
}

var App = React.createClass({
    getNavBar: function() {
        return (
                <Navigator.NavigationBar
                  routeMapper={NavigationBarRouteMapper}
                  style={styles.navBar}
                />
              )
    },
    renderScene: function(route, navigator) {
      return (
        <View></View>
      )
    },  
    render: function() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={
                      {
                        name: 'Title'
                      }
                    }
                    renderScene={this.renderScene}    
                    navigationBar={this.getNavBar()}
                    style={styles.appContainer}
                />
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    appContainer: {
      paddingTop: 52
    },
    navBar: {
      backgroundColor: '#FFF',
      borderBottomColor: '#AAA',
      borderBottomWidth: 1,
      height: 52
    },
    navTitle: {
      height: 30,
      backgroundColor: 'transparent'
    }
});

module.exports = App;