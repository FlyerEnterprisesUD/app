import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Image, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';

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
    var fav;
    if(this.state.favorite == 1) {
      fav = require('../images/star.jpg');
    } else {
      fav = require('../images/unfilled_star.png');
    }

    var StusVIP = "";
    if(this.props.card.division == 'Stuarts Landing' && this.state.points == 20){
      StusVIP = "| You are a Stu's VIP!";
    }

    return(
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }>

            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={ this.favorite.bind(this) }>
                <Image
                  style={{width: 40, height: 40}}
                  source={fav} />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{textAlign: 'center', marginBottom: 10}}>{this.props.card.name} Card {StusVIP}</Text>

              <AnimatedGaugeProgress
                size={260}
                width={50}
                fill={(this.state.points/this.props.card.total) * 100}
                style={{alignItems: 'center'}}
                rotation={90}
                cropDegree={150}
                tintColor="#CC0F40"
                backgroundColor="#ff9999"
                strokeCap="circle" />

              <Text style={{textAlign: 'center'}}> You have {this.state.points} points out of {this.props.card.total}!</Text>
            </View>

            <View>
              <View style={styles.buttons}>
                <TouchableOpacity onPress={ this.navigateToQR.bind(this) }>
                  <Text style={ styles.button }>Punch</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ this.redeem.bind(this) }>
                  <Text style={ styles.button }>Redeem</Text>
                </TouchableOpacity>
              </View>
            </View>

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
  button: {
    width: Dimensions.get('window').width / 2 - 40,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 5,
    marginTop: 15
  },
  buttons: {
    marginLeft: 30,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Card;
