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
      },
      {
        'name': 'Berry Blast',
          'group': 'Berry Blast',
          'ingredients': [
              'Strawberry',
              'Raspberry',
              'Blueberry'

          ]
      },
      {
        'name': 'Strawberry Banana',
          'group': 'Berry Blast',
          'ingredients': [
              'Strawberry',
              'Banana',
              'Almond Milk'
          ]
      },
      {
        'name': 'Front Porch',
          'group': 'Immunity Boost',
          'ingredients': [
              'Pineapple',
              'Apple Juice',
              'Kale'
          ]
      },
      {
        'name': 'CT Crunch',
          'group': 'Immunity Boost',
          'ingredients': [
              'Cinnamon',
              'Honey',
              'Banana',
              'Granola',
              'Greek Yogurt'
          ]
      },
      {
        'name': 'Main Squeeze',
          'group': 'Immunity Boost',
          'ingredients': [
              'Mango',
              'Pineapple',
              'Orange Juice',
              'Spinach',
              'Banana'
          ]
      },
      {
        'name': 'Rudy',
          'group': 'Immunity Boost',
          'ingredients': [
              'Blueberry',
              'Banana',
              'Spinach',
              'Orange Juice'
          ]
      },
      {
        'name': 'Island Flyer',
          'group': 'Immunity Boost',
          'ingredients': [
              'Pineapple',
              'Apple Juice',
              'Kale',
              'Blueberry',
              'Raspberry'
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

class Chill extends Component {
  navigateToAbout() {
    this.props.navigator.push({ id: 'About', about: about });
  }

  navigateToMenu() {
    this.props.navigator.push({ id: 'Menu', menu: menu });
  }

  render() {
    return(
      <View style={styles.container}>
        <List>

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

export default Chill;
