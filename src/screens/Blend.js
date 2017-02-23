import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Blend extends Component {
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
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blend-menu';
    //var url = 'http://localhost:5000/blend-menu';

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
    return(
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            onPress={this.navigateToMenu.bind(this)}
            key='0'
            title={'Menu'}
          />

          <ListItem
            key='1'
            title={'Promotions'}
          />

          <ListItem
            key='2'
            title={'Loyalty'}
          />

        </List>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45
  }
});

export default Blend;
