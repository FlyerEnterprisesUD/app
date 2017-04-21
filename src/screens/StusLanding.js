import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';


class StusLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {}
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentWillMount() {
    this.getInfo();
  }

  async getInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/stuslanding';
    //var url = 'http://localhost:5000/stuslanding';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ about: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToPromotions() {
    this.props.navigator.push({ id: 'Promotions', user: this.props.user, token: this.props.token, division: 'Stuarts Landing' });
  }

  navigateToRewards() {
    this.props.navigator.push({ id: 'Cards', user: this.props.user, token: this.props.token, division: 'Stuarts Landing' });
  }

  render() {
    var home = require('../images/newstusmain.jpg');

    if(this.props.user.username != 'Guest') {
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
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Lobby of Stuart Residence Hall</Text>
          </View>
          <View style={styles.hours}>
            <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Hours</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Monday - Thursday 8am - 1am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Friday 8am - 2am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Saturday 10am - 2am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Sunday 10am - 1am</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={ this.navigateToPromotions.bind(this) }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Specials</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.navigateToRewards.bind(this) }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Rewards</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      );
    } else {
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
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Lobby of Stuart Residence Hall</Text>
          </View>
          <View style={styles.hours}>
            <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Hours</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Monday - Thursday 8am - 1am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Friday 8am - 2am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Saturday 10am - 2am</Text>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Sunday 10am - 1am</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={ this.navigateToPromotions.bind(this) }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Specials</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      );
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
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

export default StusLanding;
