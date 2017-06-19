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
      refreshing: false,
      punch: false
    };
    this.getCard = this.getCard.bind(this);
  }

  componentWillMount() {
    this.getCard();
  }

  componentWillUnmount() {
    this.setState({punch: false});
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
        console.log(this.state.card);
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
    this.setState({punch: true});
    if(this.state.points < this.props.card.total) {
      this.props.navigator.push({ id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card });
    }
  }

  redeem() {
    this.setState({punch: true});
    if(this.state.points == this.props.card.total) {
      this.props.navigator.push({ id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card });
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getCard().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    if(this.state.points == undefined) {
       this.getCard();
    }

    if(this.state.punch == true) {
       this.getCard();
    }

    var fav, favWord;
    if(this.state.favorite == 1) {
      fav = require('../images/star.jpg');
      favWord = "Favorited!"
    } else {
      fav = require('../images/unfilled_star.png');
      favWord = "Click to Favorite!"
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

            <View style={{marginTop: 20}}>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 26, textAlign: 'center', marginBottom: 20}}>{this.props.card.name} Card {StusVIP}</Text>

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

              <View style={{alignItems: 'center', marginTop: -150}}>
                <Text style={{fontFamily:'LabradorA-Bold', fontSize: 55, color: '#3f3f3f'}}>{this.props.card.total - this.state.points}</Text>
                <Text style={{fontFamily:'LabradorA-Regular', fontSize: 16, color: '#3f3f3f', marginTop: -20}}>more punches</Text>
                <Text style={{fontFamily:'LabradorA-Regular', fontSize: 16, color: '#3f3f3f'}}>until next reward</Text>
              </View>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity onPress={ this.navigateToQR.bind(this) }>
                <View style={styles.buttonContainer}>
                    <Text style={ styles.button }>Punch</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ this.redeem.bind(this) }>
                <View style={styles.buttonContainer}>
                    <Text style={ styles.button }>Redeem</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', marginTop: 60}}>
              <TouchableOpacity onPress={ this.favorite.bind(this) }>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{width: 35, height: 35}}
                    source={fav} />
                  <Text style={{marginTop: 10}}>{favWord}</Text>
                </View>
              </TouchableOpacity>
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
  buttonContainer:{
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily:'LabradorA-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(220,220,220,0)'
  },
  buttons: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Card;
