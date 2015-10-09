var React = require('react-native');
var Dimensions = require('Dimensions');

var {
    width: deviceWidth,
    height: deviceHeight
} = Dimensions.get('window');

var {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView
} = React;

var Place = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>{this.props.title}</Text>
                  <Text style={styles.address}>{this.props.street}, {this.props.city}, {this.props.postal}</Text>
                </View>
                <View style={styles.spacePreview}>
                  <View style={styles.wifiContainer}>
                    <View style={styles.wifiTextWrap}>
                      <Text style={styles.wifiText}>{this.props.download}</Text>
                    </View>
                    <View style={styles.wifiTextWrap}>
                      <Text style={styles.wifiText}>{this.props.upload}</Text>
                    </View>
                  </View>
                  <View style={styles.quickInfo}>
                    <View style={[styles.quickInfoSection, styles.quickInfoSectionBorder]}>
                      <Text>Power</Text>
                      <Text>{this.props.power}</Text>
                    </View>
                    <View style={[styles.quickInfoSection, styles.quickInfoSectionBorder]}>
                      <Text>Noise</Text>
                      <Text>{this.props.noise}</Text>
                    </View>
                    <View style={styles.quickInfoSection}>
                      <Text>Cocktails</Text>
                      <Text>None</Text>
                    </View>
                  </View>
                  <View stlye={styles.fullImageContainer}>
                    <Image
                      source={{uri: this.props.full_img}}
                      style={{
                        width: deviceWidth - 8,
                        height: 600
                      }}
                    />
                  </View>
                </View>
                <View style={styles.proTip}>
                    <Text style={styles.sectionTitle}>Pro tips</Text>
                    <Text style={styles.propTipText}>{this.props.description}</Text>
                </View>
                <View style={styles.spaceOverview}>
                  <Text style={styles.sectionTitle}>More about this space</Text>
                  <View style={styles.spaceOverviewWrap}>
                    <Text style={styles.spaceOverviewTitle}>Food</Text>
                    <Text style={styles.spaceOverviewText}>{this.props.food}</Text>
                  </View>
                  <View style={styles.spaceOverviewWrap}>
                    <Text style={styles.spaceOverviewTitle}>Seating Capacity</Text>
                    <Text style={styles.spaceOverviewText}>N/A</Text>
                  </View>
                  <View style={styles.spaceOverviewWrap}>
                    <Text style={styles.spaceOverviewTitle}>Group Space</Text>
                    <Text style={styles.spaceOverviewText}>N/A</Text>
                  </View>
                  <View style={styles.spaceOverviewWrap}>
                    <Text style={styles.spaceOverviewTitle}>On The Web</Text>
                    <Text style={styles.spaceOverviewText}>N/A</Text>
                  </View>
                </View>
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
    flex: 1
  },
  headerContainer: {
    paddingLeft: 2,
    marginBottom: 15
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    color: '#565A5C',
    fontWeight: 'bold'
  },
  address: {
    color: '#999',
    fontSize: 14
  },
  spacePreview: {
    backgroundColor: '#FFF',
    marginLeft: 2,
    marginRight: 2,
    borderLeftWidth: 1,
    borderLeftColor: '#EEE',
    borderRightWidth: 1,
    borderRightColor: '#EEE',
    overflow: 'hidden'
  },
  wifiContainer: {
    borderTopColor: '#EEE',
    borderBottomColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 77,
    flexDirection: 'row'
  },
  wifiTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quickInfo: {
    height: 77,
    flexDirection: 'row'
  },
  quickInfoSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quickInfoSectionBorder: {
    borderRightColor: '#EEE',
    borderRightWidth: 1
  },
  proTip: {
    marginTop: 20,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#565A5C',
    marginBottom: 10
  },
  propTipText: {
    fontSize: 15,
    color: '#565A5C'
  },
  spaceOverview: {
    backgroundColor: '#FFF',
    padding: 10
  },
  spaceOverviewWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'flex-start'
  },
  spaceOverviewTitle: {
    color: '#999',
    flex: 1
  },
  spaceOverviewText: {
    color: '#565A5C',
    fontWeight: '600',
    flex: 1,
    textAlign: 'left'
  }
})

module.exports = Place;