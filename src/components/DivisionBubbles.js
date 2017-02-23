import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, Navigator } from 'react-native';

class DivisionBubbles extends Component {

  navigateToChill() {
    this.props.navigator.push({id:'The Chill'});
  }

  navigateToStusLanding() {
    this.props.navigator.push({id:'Stuart\'s Landing'});
  }

  navigateToArtStreetCafe() {
    this.props.navigator.push({id:'Art Street Cafe'});
  }

  navigateToBlend() {
    this.props.navigator.push({id:'The Blend'});
  }

  navigateToBlendExpress() {
    this.props.navigator.push({id:'The Blend Express'});
  }

  navigateToGalley() {
    this.props.navigator.push({id:'The Galley'});
  }

  navigateToJuryBox() {
    this.props.navigator.push({id:'Jury Box'});
  }

  render() {
    const chill = require('../images/chill.jpg');
    const blend = require('../images/blend.jpg');
    const blendexpress = require('../images/blendexpress.jpg');
    const galley = require('../images/galley.jpg');
    const artstreetcafe = require('../images/artstreetcafe.jpg');
    const jurybox = require('../images/jurybox.jpg');
    const stuslanding = require('../images/stuslanding.jpg');

    return(
      <View style={{backgroundColor:'#F2F2F2'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>

          <TouchableOpacity onPress={this.navigateToChill.bind(this)}>
          <Image
            source={chill}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToArtStreetCafe.bind(this)}>
          <Image
            source={artstreetcafe}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToBlend.bind(this)}>
          <Image
            source={blend}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToBlendExpress.bind(this)}>
          <Image
            source={blendexpress}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToJuryBox.bind(this)}>
          <Image
            source={jurybox}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToGalley.bind(this)}>
          <Image
            source={galley}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToStusLanding.bind(this)}>
            <Image
              source={stuslanding}
              style={styles.image} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  image: {
    height:64,
    width: 64,
    borderRadius: 32,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8
  }
});

export default DivisionBubbles;