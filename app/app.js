var React = require('react-native');
var Images = require('./images');

var {
    View,
    StyleSheet,
    Navigator,
    Image,
    Text
} = React;

var Home = require('./home/home');
var Search = require('./search/search');
var Place = require('./place/place');


var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator) {

  },
  RightButton: function(route, navigator) {},
  Title: function(route, navigator) {
    return (
      <Image 
        key="logo"
        source={Images.getImage('logo-mobile')} 
        resizeMode="contain"
        style={styles.navTitle}
      />
    )
  }
}

var RouteStack = {
    home: {
      component: Home,
    },
    search: {
      component: Search,
    },
    place: {
      component: Place,
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
      var Component = route.component;
      
      return (
        <Component 
          goToRoute={this.goToRoute}
          {...route.props}
        />  
      )
    },
    getRouteWithProps: function(route, props) {
        return {
            ...RouteStack[route],
            props: props || {}
        }
    },
    goToRoute: function(route, props) {
      this.refs.navigator.push(this.getRouteWithProps(route, props));
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Navigator
                    ref="navigator"
                    initialRoute={this.getRouteWithProps('home')}
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
      height: 52,
      shadowColor: 'rgba(120,120,120, .3)',
      shadowOffset: {width: 4, height: 2},
      shadowRadius: 5,
      shadowOpacity: 1
    },
    //box-shadow: rgba(120, 120, 120, 0.498039) 1px 0px 12px 0px inset;

    navTitle: {
      height: 30,
      backgroundColor: 'transparent'
    }
});

module.exports = App;