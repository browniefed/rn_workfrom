var React = require('react-native');
var Images = require('./images');

var {
    View,
    StyleSheet,
    Navigator,
    Image,
    Text,
    TouchableOpacity,
    LinkingIOS
} = React;

var Home = require('./home/home');
var Search = require('./search/search');
var Place = require('./place/place');
var Signup = require('./account/signup');
var SignupSuccess = require('./account/success');
var Login = require('./account/login');
var LoginSuccess = require('./account/loginSuccess');

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator) {
    return (
      <TouchableOpacity 
        style={styles.leftButton}
        onPress={() => {
          navigator.push(getRouteWithProps('login'))
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    ) 
  },
  RightButton: function(route, navigator) {
    return (
      <TouchableOpacity 
        style={styles.rightButton}
        onPress={() => {
          navigator.push(getRouteWithProps('signup'))
        }}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    )   
  },
  Title: function(route, navigator) {
    return (
      <Image 
        key="logo"
        source={Images.getImage('logomobile')} 
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
    },
    signup: {
      component: Signup
    },
    signupSuccess: {
      component: SignupSuccess
    },
    login: {
      component: Login
    },
    loginSuccess: {
      compnent: LoginSuccess
    }
}

function getRouteWithProps (route, props) {
    return {
        ...RouteStack[route],
        props: props || {}
    }
}

var App = React.createClass({
    componentDidMount: function() {
      LinkingIOS.addEventListener('url', this._handleOpenURL);
      var url = LinkingIOS.popInitialURL();
      if (url) { this._handleOpenURL({url: url}); }
    },
    componentWillUnmount: function() {
      LinkingIOS.removeEventListener('url', this._handleOpenURL);
    },
    _handleOpenURL: function(event) {
      debugger;
      // var alUrl = new AppLinkURL(event.url)
      // // work with alUrl.appLinkData. For example render back link to referer app.
      // var backLink = null;
      // var refererAL = alUrl.appLink.referer_app_link;

      // // if referer app link was provided we can construct back button with text
      // if (refererAL) {
      //   backLink = {
      //     url: refererAL.url,
      //     text: 'Back' + refererAL.app_name ? ' to ' + refererAL.app_name : ''
      //   };
      // }
    },
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
          replaceRoute={this.replaceRoute}
          {...route.props}
        />  
      )
    },

    goToRoute: function(route, props) {
      this.refs.navigator.push(getRouteWithProps(route, props));
    },
    replaceRoute: function(route, props) {
      this.refs.navigator.replace(getRouteWithProps(route, props));
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Navigator
                    ref="navigator"
                    initialRoute={getRouteWithProps('home')}
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
    },
    leftButton: {
      marginLeft: 10,
      marginTop: 5
    },
    rightButton: {
      marginRight: 10,
      marginTop: 5
    }
});

module.exports = App;