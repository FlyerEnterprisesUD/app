import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class NavBarTitle extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

export default NavBarTitle
