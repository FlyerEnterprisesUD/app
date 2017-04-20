import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, Image, Dimensions, TouchableHighlight } from 'react-native';
import DivisionBubbles from '../components/DivisionBubbles';
import Carousel from 'react-native-carousel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: [],
      promos: []
    }
    this.getPromotions = this.getPromotions.bind(this);
  }

  navigateToPromotions(division) {
    this.props.navigator.push({ id: 'Promotions', user: this.props.user, token: this.props.token, division: division });
  }

  componentWillMount() {
    this.getPromotions();
  }

  async getPromotions() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/promotions';
    //var url = 'http://localhost:5000/promotions';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ promotions: responseJson.promotions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }


  render() {

    var BlendHome = require('../images/BlendHome.jpg');
    var BlendExpressHome = require('../images/BlendExpressHome.jpg');
    var ChillHome = require('../images/TheChill.jpg');
    var GalleyHome = require('../images/GalleyHome.jpg');
    var StusHome = require('../images/StusHome.jpg');
    var ArtStreetCafeHome = require('../images/StusHome.jpg');
    var JuryBoxHome = require('../images/StusHome.jpg');
    var MovingAndStorageHome = require('../images/StusHome.jpg');

    return(
      <View style={ styles.container }>
        <DivisionBubbles navigator={ this.props.navigator } user={ this.props.user } token={ this.props.token } />

        <Carousel animate={true} delay={5000} indicatorAtBottom={true} indicatorOffset={0}>
          <View key={0}>
            <Image style={styles.image} source={BlendHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'The Blend')}>
              <View>
                <Text style={styles.text}>The Blend</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={1}>
            <Image style={styles.image} source={ChillHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'The CHILL')}>
              <View>
                <Text style={styles.text}>The CHILL</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={2}>
            <Image style={styles.image} source={GalleyHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'The Galley')}>
              <View>
                <Text style={styles.text}>The Galley</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={3}>
            <Image style={styles.image} source={BlendExpressHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'The Blend Express')}>
              <View>
                <Text style={styles.text}>The Blend Express</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={4}>
            <Image style={styles.image} source={StusHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'Stuarts Landing')}>
              <View>
                <Text style={styles.text}>Stuarts Landing</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={5}>
            <Image style={styles.image} source={JuryBoxHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'The Jury Box')}>
              <View>
                <Text style={styles.text}>The Jury Box</Text>
              </View>
              </TouchableHighlight>
            </Image>
          </View>
          <View key={6}>
            <Image style={styles.image} source={ArtStreetCafeHome}>
            <TouchableHighlight onPress={this.navigateToPromotions.bind(this, 'ArtStreet Cafe')}>
              <View>
                <Text style={styles.text}>ArtStreet Cafe</Text>
              </View>
              </TouchableHighlight>
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
