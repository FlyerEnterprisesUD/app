import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import RewardCard from '../components/RewardCard';

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

      console.log(this.state.cards);

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token });
  }

  render() {
    if(this.state.cards.length == 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.no}>You Have No Favorited Reward Cards!</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ScrollView style={{marginTop: 5}}>
          {
            this.state.cards.map((l, i) => (
              <TouchableOpacity key={i} onPress={this.navigateToCard.bind(this, l.card)}>
                <RewardCard card={l.card} division={l.division} points={l.points} />
              </TouchableOpacity>
            ))
          }
          </ScrollView>
        </View>
      );
    }


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
    height: 120
  },
  textContainer: {
    marginLeft: 20,
    marginTop: -100,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  textBold: {
    color: '#FFFFFF',
    fontFamily:'LabradorA-Bold',
    fontSize: 26
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width - 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily:'LabradorA-Regular',
    fontSize: 20,
    marginTop: -6,
    marginBottom: 10
  },
  no: {
    fontFamily:'LabradorA-Bold',
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default Rewards;
