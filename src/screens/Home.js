import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, Image, Dimensions, TouchableHighlight } from 'react-native';
import DivisionBubbles from '../components/DivisionBubbles';
import Carousel from 'react-native-carousel';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var BlendHome = require('../images/blendc.jpg');
    var BlendExpressHome = require('../images/blendexpressc.jpg');
    var ChillHome = require('../images/chillc.jpg');
    var GalleyHome = require('../images/galleyc.jpg');
    var StusHome = require('../images/stusc.jpg');
    var ArtStreetCafeHome = require('../images/artstreetc.jpg');
    var JuryBoxHome = require('../images/juryboxc.jpg');
    var MovingAndStorageHome = require('../images/storagec.jpg');

    return(
      <View style={ styles.container }>
        <DivisionBubbles navigator={ this.props.navigator } user={ this.props.user } token={ this.props.token } />

        <Carousel animate={true} delay={5000} indicatorAtBottom={true} indicatorOffset={0}>
          <View key={0}>
            <Image style={styles.image} source={BlendHome}>
              <View>
                <Text style={styles.text}>The Blend</Text>
              </View>
            </Image>
          </View>
          <View key={1}>
            <Image style={styles.image} source={ChillHome}>
              <View>
                <Text style={styles.text}>The CHILL</Text>
              </View>
            </Image>
          </View>
          <View key={2}>
            <Image style={styles.image} source={GalleyHome}>
              <View>
                <Text style={styles.text}>The Galley</Text>
              </View>
            </Image>
          </View>
          <View key={3}>
            <Image style={styles.image} source={BlendExpressHome}>
              <View>
                <Text style={styles.text}>The Blend Express</Text>
              </View>
            </Image>
          </View>
          <View key={4}>
            <Image style={styles.image} source={StusHome}>
              <View>
                <Text style={styles.text}>Stuarts Landing</Text>
              </View>
            </Image>
          </View>
          <View key={5}>
            <Image style={styles.image} source={JuryBoxHome}>
              <View>
                <Text style={styles.text}>The Jury Box</Text>
              </View>
            </Image>
          </View>
          <View key={6}>
            <Image style={styles.image} source={ArtStreetCafeHome}>
              <View>
                <Text style={styles.text}>ArtStreet Cafe</Text>
              </View>
            </Image>
          </View>
          <View key={7}>
            <Image style={styles.image} source={MovingAndStorageHome}>
              <View>
                <Text style={styles.text}>Moving And Storage</Text>
              </View>
            </Image>
          </View>
        </Carousel>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 145
  },
  text: {
    backgroundColor: 'rgba(220,220,220,.9)',
    padding: 10,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Home;
