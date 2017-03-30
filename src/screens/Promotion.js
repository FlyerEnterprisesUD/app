import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Promotion extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 18, marginBottom: 15}}>{this.props.promotion.title}</Text>
        <Text style={{fontSize: 18, marginBottom: 15}}>Where: {this.props.promotion.division}</Text>
        <Text style={{fontSize: 18}}>{this.props.promotion.body}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Promotion
