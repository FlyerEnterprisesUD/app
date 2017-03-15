import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class BlendExpress extends Component {
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
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blendexpress';
    //var url = 'http://localhost:5000/blendexpress';

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
    this.props.navigator.push({ id: 'Cards', user: this.props.user, token: this.props.token, division: 'The Blend Express' });
  }

  render() {
    if(this.props.user.username != 'Guest') {
      return(
        <View style={styles.container}>

        <View>
        <Text>PICTURE GOES HERE!</Text>
        </View>

        <View>
        <Text>The Blend Express</Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Location:</Text>
        <Text style={{marginLeft: 10}}> { this.state.about.location }</Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Hours:</Text>
        <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
        <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
        </View>

        <View style={{marginBottom:10}}>
        <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
          <Text style={ styles.button }>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
        <Text>PICTURE GOES HERE!</Text>
        </View>

        <View>
        <Text>The Blend Express</Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Location:</Text>
        <Text style={{marginLeft: 10}}> { this.state.about.location }</Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Hours:</Text>
        <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
        <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
        </View>

        <View style={{marginBottom:10}}>
        <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
          <Text style={ styles.button }>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#00AEEF',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

export default BlendExpress;
