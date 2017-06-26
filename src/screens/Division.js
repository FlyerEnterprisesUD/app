import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ArtStreetCafe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ChillHome = require('../images/newchill.jpg');
    var BlendHome = require('../images/newblend.jpg');
    var BlendExpressHome = require('../images/BlendExpressMain.png');
    var GalleyHome = require('../images/newgalley.jpg');
    var JuryBoxHome = require('../images/newjury.jpg');
    var ArtStreetHome = require('../images/newart.jpg');
    var StuartsLandingHome = require('../images/newstusmain.jpg');
    var MovingAndStorageHome = require('../images/BlendHome.jpg');

    var home;

    if(this.props.division == 'The CHILL') {
      home = ChillHome;
    } else if(this.props.division == 'The Blend') {
      home = BlendHome;
    } else if(this.props.division == 'The Blend Express') {
      home = BlendExpressHome;
    } else if(this.props.division == 'The Galley') {
      home = GalleyHome;
    } else if(this.props.division == 'The Jury Box') {
      home = JuryBoxHome;
    } else if(this.props.division == 'ArtStreet Cafe') {
      home = ArtStreetHome;
    } else if(this.props.division == 'Stuarts Landing') {
      home = StuartsLandingHome;
    } else {
      home = MovingAndStorageHome;
    }

    return(
      <View style={styles.container}>

        <View>
          <Image
            style={{width: Dimensions.get('window').width, height: 200}}
            source={home}
          />
        </View>

        <View style={styles.info}>
          <View style={styles.about}>
            <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Location</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>{this.props.location}</Text>
          </View>
          <View style={styles.hours}>
            <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Hours</Text>

            {
              this.props.hours.map((l, i) => (
                <Text key={i} style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>{l}</Text>
              ))
            }

          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonContainer:{
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily:'LabradorA-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  info: {
    marginLeft: 75,
    marginRight: 75
  },
  about: {
    alignItems: 'flex-end',
    marginTop: 20
  },
  hours: {
    marginTop: 20
  },
  buttons: {
    marginLeft: 75,
    marginRight: 75,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ArtStreetCafe;
