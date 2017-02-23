import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Chill extends Component {
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
    this.getAbout();
  }

  async getMenu() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/chill-menu';
    //var url = 'http://localhost:5000/chill-menu';

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
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/chill-about';

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

      <View>
      <Text>PICTURE GOES HERE!</Text>
      </View>

      <View>
      <Text>The Chill</Text>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Location:</Text>
      <Text style={{marginLeft: 10}}> { this.state.about.location }</Text>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Hours:</Text>
      <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
      <Text style={{marginLeft: 10}}>{ this.state.about.hours }</Text>
      </View>

<<<<<<< HEAD
      <View style={{marginBottom:10}}>
      <TouchableOpacity onPress={ this.navigateToMenu.bind(this) }>
=======
      <TouchableOpacity onPress={ this.login }>
>>>>>>> origin/master
        <Text style={ styles.button }>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={ styles.button }>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={ styles.button }>Loyalty</Text>
      </TouchableOpacity>
      </View>

      </View>
    );
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
<<<<<<< HEAD
=======
    marginBottom: 10,
>>>>>>> origin/master
    padding: 10,
    backgroundColor: '#87BFCE',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
<<<<<<< HEAD
  }
=======
  },


>>>>>>> origin/master
});

export default Chill;
