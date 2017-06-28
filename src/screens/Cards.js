import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import CardList from '../components/Cards';
import NewCardList from '../components/NewCards';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.cards);
    //console.log(this.props.newCards);
    return (
      <ScrollView style={styles.container}>
        <CardList user={this.props.user} navigator={ this.props.navigator } cards={this.props.cards} division={this.props.division} token={this.props.token} />
        <NewCardList user={this.props.user} navigator={ this.props.navigator } cards={this.props.newCards} division={this.props.division} token={this.props.token} />
      </ScrollView>
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
