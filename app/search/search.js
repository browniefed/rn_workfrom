var React = require('react-native');
var API = require('../api');

var Result = require('./result');

var {
    View,
    StyleSheet,
    ScrollView,
    MapView
} = React;

var Search = React.createClass({
    getInitialState: function() {
        return {
            loading : true,
            results: []
        };
    },
    componentWillMount: function() {
        if (this.props.ll) {
            API.getLL(this.props.ll).end(this.handleResults);
        } else if (this.props.postal) {
            API.getPostal(this.props.postal, 10).end(this.handleResults);
        }
    },
    handleResults: function(err, res) {

        var results = JSON.parse(res.text);
        this.setState({
            loading: false,
            results: results.response
        });
    },
    getLoading: function() {

    },
    getResults: function() {
        if (this.state.loading) {
            return this.getLoading();
        }

        return this.state.results.map(function(data) {
            return (
                <Result 
                    onPress={this.goToRoute.bind(this, data)}
                    key={data.ID}
                    {...data}
                />
            )
        }, this)
    },
    goToRoute: function(data) {
        this.props.goToRoute('place', data);
    },
    getAnnotations: function() {
      if (!this.state.results.length) return;
      return this.state.results.map((result) => {
        return {
          latitude: result.latitude,
          longitude: result.longitude,
          animateDrop: true,
          title: result.title,
          subtitle: result.food
        }
      })
    },
    getMap: function() {
      if (!this.props.map) return null;

      return (
        <MapView
                  annotations={this.getAnnotations()}
                  region={{...this.props.coords, latitudeDelta: .05, longitudeDelta: .05}}
                  style={styles.flexContainer}
        />
      )
    },
    render: function() {
        return (
            <View style={styles.container}>
                {this.getMap()}
                
                <ScrollView style={styles.scrollContainer}>
                  {this.getResults()}
                </ScrollView>
            </View>
        )
    }
});


var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F1EF',
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15
    },
    flexContainer: {
      flex: 1,
    },
    scrollContainer: {
      flex: 2
    }
})
module.exports = Search;