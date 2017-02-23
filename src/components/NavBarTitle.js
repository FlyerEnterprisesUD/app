import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native-elements';

class NavBarTitle extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View>
        <Text style={ styles.text }>{this.props.title}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
});

export default NavBarTitle
