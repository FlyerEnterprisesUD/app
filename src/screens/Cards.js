import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import CardList from '../components/Cards';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
    this.getCards = this.getCards.bind(this);
  }

  componentWillMount() {
    this.getCards();
  }

  async getCards() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getcards';
    //var url = 'http://localhost:5000/auth/getcards';

    var division = this.props.division;
    if(division = 'The Blend Express') {
      division = 'The Blend';
    }

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          division: division,
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

  render() {
    return (
      <View style={styles.container}>
        <CardList user={this.props.user} navigator={ this.props.navigator } cards={this.state.cards} division={this.props.division} token={this.props.token} />
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

export default Cards;
