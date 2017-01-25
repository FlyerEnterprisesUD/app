import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';

class Home extends Component {
  changeRoute() {
    this.props.navigator.push({ id: 'Chill' });
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text onPress={this.changeRoute.bind(this)}>Home</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  }
});

export default Home;
