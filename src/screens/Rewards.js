import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Cards from '../components/Cards';

class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentWillMount() {
    this.getFavorites();
  }

  async getFavorites() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getfavorites';
    //var url = 'http://localhost:5000/auth/getfavorites';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          userId: this.props.user.id
        })
      });

      let responseJson = await response.json();

      this.setState({ cards: responseJson.response.cards });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginTop: 5}}>
        {
          this.state.cards.map((l, i) => (
            <TouchableOpacity key={i} onPress={this.navigateToCard.bind(this, l.card)}>
              <View style={styles.card}>
                <View style={styles.text}>
                  <Text>{l.card.name}</Text>
                  <Text>{l.division}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  },
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

export default Rewards;
