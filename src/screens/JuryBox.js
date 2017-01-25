import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

let menu = {
    'products': [
      {
        'name': 'Sunny & 55',
        'group': 'Berry Blast',
        'ingredients': [
          'Mango',
          'Strawberry',
          'Orange Juice',
          'Greek Yogurt'
        ]
      },
      {
        'name': 'Cruising',
        'group': 'Berry Blast',
        'ingredients': [
          'Pineapple',
          'Raspberry',
          'Apple Juice'
        ]
      },
      {
        'name': 'MVP',
        'group': 'Berry Blast',
        'ingredients': [
          'Mango',
          'Pineapple',
          'Almond Milk'
        ]
      }
    ]
};

let about = {
  'location': 'Recplex',
  'hours': [
    'Sunday - Thursday 11am - 11pm',
    'Friday - Saturday 11am - 9pm'
  ]
};

class JuryBox extends Component {
  navigateToAbout() {
    this.props.navigator.push({ id: 'About', about: about });
  }

  navigateToMenu() {
    this.props.navigator.push({ id: 'Menu', menu: menu });
  }

  render() {
    return(
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            onPress={this.navigateToAbout.bind(this)}
            key='0'
            title={'About'}
          />

          <ListItem
            onPress={this.navigateToMenu.bind(this)}
            key='1'
            title={'Menu'}
          />

          <ListItem
            key='2'
            title={'Promotions'}
          />

          <ListItem
            key='3'
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

export default JuryBox;
