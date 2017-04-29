import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import CardList from '../components/Cards';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList user={this.props.user} navigator={ this.props.navigator } cards={this.props.cards} division={this.props.division} token={this.props.token} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default Cards;
