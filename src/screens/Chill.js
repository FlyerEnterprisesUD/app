import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Chill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      about: {}
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentWillMount() {
    this.getInfo();
  }

  async getInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/chill';
    //var url = 'http://localhost:5000/chill';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ menu: responseJson.menu });
      this.setState({ about: responseJson.about });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToMenu() {
    this.props.navigator.push({ id: 'Menu', menu: this.state.menu, division: 'The CHILL' });
  }

  navigateToRewards() {
    this.props.navigator.push({ id: 'Cards', user: this.props.user, token: this.props.token, division: 'The CHILL' });
  }

  navigateToPromotions() {
    this.props.navigator.push({ id: 'Promotions', user: this.props.user, token: this.props.token, division: 'The CHILL' });
  }

  render() {
    var home = require('../images/MainChill.jpg');

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
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Recplex</Text>
            </View>
            <View style={styles.hours}>
              <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Hours</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Sunday - Thursday 11am - 11pm</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Friday - Saturday 11am - 9pm</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
              <View style={styles.buttonContainer}>
                  <Text style={ styles.button }>Menu</Text>
              </View>
            </TouchableOpacity>
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
              source={{uri: 'http://i0.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/IMG_2555-1.jpg?zoom=2&resize=1180%2C300'}}
            />
          </View>

          <View style={styles.info}>
            <View style={styles.about}>
              <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Location</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Recplex</Text>
            </View>
            <View style={styles.hours}>
              <Text style={{fontFamily:'LabradorA-Bold', fontSize: 20, color: '#939393'}}>Hours</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Sunday - Thursday 11am - 11pm</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, color: '#939393'}}>Friday - Saturday 11am - 9pm</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
              <View style={styles.buttonContainer}>
                  <Text style={ styles.button }>Menu</Text>
              </View>
            </TouchableOpacity>
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

export default Chill;
