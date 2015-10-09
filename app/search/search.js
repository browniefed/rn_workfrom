var React = require('react-native');
var API = require('../api');

var Result = require('./result');

var {
    View,
    StyleSheet,
    ScrollView
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
    render: function() {
        return (
            <View style={styles.container}>
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
    scrollContainer: {
      flex: 1,
    }
})
module.exports = Search;