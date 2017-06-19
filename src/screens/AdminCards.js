import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class AdminCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      cards: []
    };
    this.getCards = this.getCards.bind(this);
  }

  componentWillMount() {
    this.getCards();
  }

  async getCards() {
    //var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getallcards';
    var url = 'http://localhost:5000/auth/getallcards';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token
        })
      });

      let responseJson = await response.json();

      this.setState({ cards: responseJson.response.cards });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getCards().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToCard(card) {
    this.props.navigator.push({id: 'Edit Card', user: this.props.user, token: this.props.token, card: card});
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >

        {
          this.state.cards.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.division}
              onPress={this.navigateToCard.bind(this, l)}
            />
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
  }
});

export default AdminCards
