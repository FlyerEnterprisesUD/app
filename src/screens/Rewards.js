import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView, Image, RefreshControl } from 'react-native';
import RewardCard from '../components/RewardCard';

class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisions: [],
    }
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentWillMount() {
    this.getFavorites();
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getFavorites().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getFavorites() {
    var url = 'https://flyerentapi.herokuapp.com/card/getfavorites';
    //var url = 'http://localhost:3000/card/getfavorites';

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

      this.setState({ divisions: responseJson.response.divisions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token });
  }

  //TODO refresh
  render() {
    console.log()
    if(this.state.divisions.length == 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.no}>You Have No Favorited Reward Cards!</Text>
        </View>
      );
    } else {
      return (
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
            this.state.divisions.map((l, i) => (
              <RewardCard key={i} division={l} navigator={this.props.navigator} user={this.props.user} token={this.props.token}/>
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
    backgroundColor: '#f2f2f2',
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
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 18
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width - 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 16,
    marginTop: -6,
    marginBottom: 10
  },
  no: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default Rewards;
