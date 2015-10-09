var React = require('react-native');
var Dimensions = require('Dimensions');
var Images = require('../images');

var {
    width: deviceWidth,
    height: deviceHeight
} = Dimensions.get('window');

var {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} = React;

var Result = React.createClass({
    render: function() {
        var image = Images.getImage('logo');
        if (this.props.thumbnail_img) {
            image = {
                uri: this.props.thumbnail_img
            }
        }

        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.props.onPress}>
                <Image 
                    source={image}
                    style={{
                        width: deviceWidth - 30,
                        height: 150
                    }}
                >
                    <View style={styles.wifi}>
                        <Text style={styles.wifiText}>WiFi Mb/s</Text>
                        <Text style={styles.wifiText}>V {this.props.download}</Text>
                        <Text style={styles.wifiText}>^ {this.props.upload}</Text>
                    </View>
                </Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.address}>{this.props.street},{this.props.city}</Text>
                </View>
              </TouchableOpacity>
            </View>
        )
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    wifi: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    wifiText: {
      fontSize: 15,
      color: "#FFF",
      fontWeight: 'bold'
    },  
    titleContainer: {
        backgroundColor: '#FFF',
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 10
    },
    title: {
        color: '#22313F',
        fontWeight: "700",
        fontSize: 16
    },
    address: {
        color: '#6F6F6F',
        fontWeight: "400",
        fontSize: 14
    }
})
module.exports = Result;