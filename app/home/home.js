var React = require('react-native');

var {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} = React;

var PopularAreas = [
    {text: 'New York City', ll: '40.706872, -74.012646'},
    {text: 'Portland', ll: '45.523352, -122.668232'},
    {text: 'London', ll: '51.506666, -0.127851'},
    {text: 'Austin', ll: '30.266372, -97.742664'},
    {text: 'Seattle', ll: '47.605202, -122.331501'},
    {text: 'San Francisco', ll: '37.774309, -122.419419'}
]

var Home = React.createClass({
    getInitialState: function() {
        return {
            value : '' 
        };
    },
    getPopularCities: function() {
        return PopularAreas.map(function(city) {
            return (
                <TouchableOpacity onPress={this.goToRoute.bind(this, city.ll)}>
                    <Text style={styles.popularItem}>{city.text}</Text>
                </TouchableOpacity>
            )
        }, this);
    },
    goToRoute: function(ll) {
        this.props.goToRoute('search', {
            ll: ll
        })
    },
    goToRoutePostal: function() {
      if (!this.state.value) {
        return;
      }
      this.props.goToRoute('search', {
        postal: this.state.value
      })
    },
    handleChange: function(text) {
      this.setState({
        value: text
      })
    },
    searchNearby: function() {
      navigator.geolocation.getCurrentPosition(
        (initialPosition) => this.props.goToRoute('search', {
          map: true,
          coords: initialPosition.coords,
          ll: initialPosition.coords.latitude + ', ' + initialPosition.coords.longitude
        }),
        (error) => alert(error.message),
        { timeout: 20000, maximumAge: 1000}
      );
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.nearbyButton} onPress={this.searchNearby}>
                      <View>
                        <Text style={styles.nearbyText}>NearBy</Text>
                      </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                  <ScrollView style={styles.scrollContainer}>
                    <View style={styles.explanation}>
                        <Text style={styles.explanationText}>
                            Use Workfrom to discover the best coffee shops, bars, coworking spaces and other work-friendly places in cities and towns everywhere.
                        </Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Search by postal code" 
                            value={this.state.value}
                            onChangeText={this.handleChange}
                            keyboardType="number-pad"
                        />
                        <TouchableOpacity onPress={this.goToRoutePostal}>
                          <View style={styles.searchButton}>
                            <Text style={styles.searchButtonText}>Search</Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.popularContainer}>
                        <Text style={styles.popularHeader}>Popular Areas</Text>
                        {
                            this.getPopularCities()
                        }
                    </View>
                  </ScrollView>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#4DAEB7',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    nearbyButton: {
      borderWidth: 1,
      borderColor: '#FFF',
      width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    nearbyText: {
      color: '#FFF'
    },
    contentContainer: {
      flex: 1,
      backgroundColor: '#F2F1EF'
    },
    scrollContainer: {
      flex: 1,
    },
    explanation: {
      padding: 15,
      flex: 1
    },
    explanationText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#565A5C',
      lineHeight: (16 * 1.5)
    },
    searchContainer: {
      flex: 1,
      padding: 15,
      flexDirection: 'row'
    },
    input: {
      flex: 5,
      height: 35,
      backgroundColor: '#FFF',
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    searchButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 35,
      backgroundColor: '#4DAEB7',
      paddingLeft: 15,
      paddingRight: 15
    },
    searchButtonText: {
      color: '#FFF'
    },
    popularContainer: {
      flex: 1,
      alignItems: 'center'
    },
    popularHeader: {
      fontSize: 22,
      lineHeight: (22 * 1.5),
      color: '#565A5C',
      fontWeight: '100',
      marginBottom: 20
    },
    popularItem: {
      color: '#2EA5B3',
      justifyContent: 'center',
      height: 35,
      marginTop: 5,
      marginBottom: 5,
      fontSize: 18
    }
})

module.exports = Home;