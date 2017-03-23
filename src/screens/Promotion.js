import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Promotion extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Title: {this.props.promotion.title}</Text>
        <Text>Division: {this.props.promotion.division}</Text>
        <Text>Body: {this.props.promotion.body}</Text>
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

export default Promotion
