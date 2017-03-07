import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
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

export default BlendExpress;
