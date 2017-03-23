import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token });
  }

  render() {
    return (
      <ScrollView style={{marginTop: 5}}>
      {
        this.props.cards.map((l, i) => (
          <TouchableOpacity key={i} onPress={this.navigateToCard.bind(this, l)}>
            <View style={styles.card}>
              <View style={styles.text}>
                <Text>{l.name}</Text>
                <Text>{l.division}</Text>
                <Text>{l.total}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  card: {
    borderColor: '#D3D3D3',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    height: 100
  },
  text: {
    margin: 5
  }
});

export default Cards;
