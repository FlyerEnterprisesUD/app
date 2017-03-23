import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView, RefreshControl } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      points: 0,
      favorite: 0,
      refreshing: false
    };
    this.getCard = this.getCard.bind(this);
  }

  componentWillMount() {
    this.getCard();
  }

  async getCard() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getcard';
    //var url = 'http://localhost:5000/auth/getcard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          userId: this.props.user.id,
          cardId: this.props.card.id,
          division: this.props.card.division
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.setState({ card: responseJson.response.card, points: responseJson.response.card.points, favorite: responseJson.response.card.favorite});
      } else {

      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async favorite() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/favorite';
    //var url = 'http://localhost:5000/auth/favorite';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          userId: this.props.user.id,
          cardId: this.props.card.id
        })
      });

      let responseJson = await response.json();

      if(this.state.favorite == 0) {
        this.setState({favorite: 1});
      } else {
        this.setState({favorite: 0});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToQR() {
    this.props.navigator.push({ id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card });
  }

  redeem() {
    this.props.navigator.push({ id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card });
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getCard().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    var StusVIP = "";
    if(this.props.card.division == 'Stuarts Landing' && this.state.points == 20){
      StusVIP = "| You are a Stu's VIP!";
    }

    return(
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }>
        <View>
          <Text>{this.props.card.name} {StusVIP}</Text>
          <Text>{this.state.points} / {this.props.card.total}</Text>
          <TouchableOpacity onPress={ this.favorite.bind(this) }>
            <Text style={ styles.button }>Favorite: {this.state.favorite}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={ this.navigateToQR.bind(this) }>
            <Text style={ styles.button }>Punch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.redeem.bind(this) }>
            <Text style={ styles.button }>Redeem</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  },
  button: {
    width: Dimensions.get('window').width / 2 - 40,
    padding: 10,
    backgroundColor: '#87BFCE',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  },
  buttons: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200
  }
});

export default Card;
