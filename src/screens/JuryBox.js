import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class JuryBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      about: {}
    }
    this.getMenu = this.getMenu.bind(this);
    this.getAbout = this.getAbout.bind(this);
  }

  componentWillMount() {
    this.getMenu();
    //this.getAbout();
  }

  async getMenu() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/jurybox-menu';
    //var url = 'http://localhost:5000/jurybox-menu';

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

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getAbout() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/jurybox-about';

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

  navigateToMenu() {
    this.props.navigator.push({ id: 'Menu', menu: this.state.menu });
  }

  render() {
    console.log(this.state.about.hours);

    return(
      <View style={styles.container}>
      <Text>The Jury Box</Text>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Location:</Text>
      <Text style={{marginLeft: 10}}> { this.state.about.location }</Text>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Hours:</Text>
      <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
      <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>

      <TouchableOpacity onPress={ this.navigateToMenu }>
        <Text style={ styles.button }>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={ styles.button }>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={ styles.button }>Loyalty</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45,
  },
  button: {
    width: Dimensions.get('window').width - 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#87BFCE',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  },


});

export default JuryBox;
