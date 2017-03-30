import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class JuryBox extends Component {
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
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/jurybox';
    //var url = 'http://localhost:5000/jurybox';

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
    this.props.navigator.push({ id: 'Menu', menu: this.state.menu });
  }

  navigateToRewards() {
    this.props.navigator.push({ id: 'Cards', user: this.props.user, token: this.props.token, division: 'The Jury Box' });
  }

  navigateToPromotions() {
    this.props.navigator.push({ id: 'Promotions', user: this.props.user, token: this.props.token, division: 'The Jury Box' });
  }

  render() {
    if(this.props.user.username != 'Guest') {
      return(
        <View style={styles.container}>

        <View>
        <Image
          style={{width: Dimensions.get('window').width, height: 200}}
          source={{uri: 'http://i2.wp.com/flyerenterprises.com/wp-content/uploads/2016/01/IMG_2450.jpg?zoom=2&resize=1180%2C300'}}
        />
        </View>

        <View>
        <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: 'red'}}>Location:</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10, marginBottom: 5}}> { this.state.about.location }</Text>
        <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: 'red'}}>Hours:</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10}}>Monday - Thursday 8am - 7pm</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10}}>Friday 8am - 3pm</Text>
        </View>

        <View style={{marginBottom:10}}>
        <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
          <Text style={ styles.button }>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.navigateToPromotions.bind(this) }>
          <Text style={ styles.button }>Promotions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.navigateToRewards.bind(this) }>
          <Text style={ styles.button }>Rewards</Text>
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
          source={{uri: 'http://i2.wp.com/flyerenterprises.com/wp-content/uploads/2016/01/IMG_2450.jpg?zoom=2&resize=1180%2C300'}}
        />
        </View>

        <View>
        <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: 'red'}}>Location:</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10, marginBottom: 5}}> { this.state.about.location }</Text>
        <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: 'red'}}>Hours:</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10}}>Monday - Thursday 8am - 7pm</Text>
        <Text style={{fontSize: 18, textAlign: 'center', marginLeft: 10}}>Friday 8am - 3pm</Text>
        </View>

        <View style={{marginBottom:10}}>
        <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
          <Text style={ styles.button }>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.navigateToPromotions.bind(this) }>
          <Text style={ styles.button }>Promotions</Text>
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
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 65
  },
  button: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginRight: 70,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#691325',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

export default JuryBox;
