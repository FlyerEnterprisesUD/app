import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';
import Display from 'react-native-display';

class Division extends Component {
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
    var HeritageHome = require('../images/newheritage.png');
    var MovingAndStorageHome = require('../images/BlendHome.jpg');

    var home;

    console.log(this.props.division);

    if(this.props.division.division.name == 'The CHILL') {
      home = ChillHome;
    } else if(this.props.division.division.name == 'The Blend') {
      home = BlendHome;
    } else if(this.props.division.division.name == 'The Blend Express') {
      home = BlendExpressHome;
    } else if(this.props.division.division.name == 'The Galley') {
      home = GalleyHome;
    } else if(this.props.division.division.name == 'The Jury Box') {
      home = JuryBoxHome;
    } else if(this.props.division.division.name == 'ArtStreet Cafe') {
      home = ArtStreetHome;
    } else if(this.props.division.division.name == 'Stuarts Landing') {
      home = StuartsLandingHome;
    } else if(this.props.division.division.name == 'Heritage Coffeehouse') {
      home = HeritageHome;
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
            <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#515151'}}>Location</Text>
            <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, color: '#515151'}}>{this.props.division.division.location}</Text>
          </View>
          <View style={styles.hours}>
            <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#515151'}}>Hours</Text>


            {
              this.props.division.hours.map((l, i) => (
                <Display key={i} enable={!l.endDay}>
                  <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, color: '#515151'}}>{l.startDay} {l.startHour} - {l.endHour}</Text>
                </Display>
              ))
            }

            {
              this.props.division.hours.map((l, i) => (
                <Display key={i} enable={l.endDay}>
                  <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, color: '#515151'}}>{l.startDay} - {l.endDay} {l.startHour} - {l.endHour}</Text>
                </Display>
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
    backgroundColor: '#f2f2f2'
  },
  buttonContainer:{
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  info: {
    marginLeft: 70,
    marginRight: 70
  },
  about: {
    alignItems: 'flex-end',
    marginTop: 20
  },
  hours: {
    marginTop: 20
  },
  buttons: {
    marginLeft: 70,
    marginRight: 70,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Division;
