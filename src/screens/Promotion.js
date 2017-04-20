import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import moment from 'moment-timezone';

class Promotion extends Component {
  constructor() {
    super();
  }

  render() {

    //fix this immediately

    const BlendLogo = require('../images/logoblend.png');
    /* const ArtStreetLogo = require('../images/logoartstreet.png');
    const JuryBoxLogo = require('../images/logojury.png');
    const GalleyLogo = require('../images/logogalley.png');
    const StusLogo = require('../images/logostus.png');
    const ChillLogo = require('../images/logochill.png'); */

    var Logo;

    if(this.props.division == 'The Blend' || this.props.division == 'The Blend Express') {
      Logo = BlendLogo;
    } else if(this.props.division == 'ArtStreet Cafe') {
      Logo = ArtStreetLogo;
    } else if(this.props.division == 'The Jury Box') {
      Logo = JuryBoxLogo;
    } else if(this.props.division == 'The Galley') {
      Logo = GalleyLogo;
    } else if(this.props.division == 'Stuarts Landing') {
      Logo = StusLogo;
    } else if(this.props.division == 'The CHILL') {
      Logo = ChillLogo;
    }


    return(
      <View style={styles.container}>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 26, textAlign: 'center'}}>{this.props.promotion.title}</Text>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, textAlign: 'center'}}>{this.props.promotion.division}</Text>
        </Card>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 20, textAlign: 'center'}}>{moment(this.props.promotion.time).format("MMM DD")} - {moment(this.props.promotion.end).format("MMM DD")}</Text>
        </Card>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 20, textAlign: 'center'}}>{this.props.promotion.body}</Text>
        </Card>
        <View style={{alignItems:'center'}}><Image style={styles.image} source={BlendLogo} /></View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 65
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 200
  }
});

export default Promotion
