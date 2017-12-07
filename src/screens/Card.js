import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl
} from 'react-native';
import {AnimatedGaugeProgress} from 'react-native-simple-gauge';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    this.createCard = this.createCard.bind(this);
    this.getCard = this.getCard.bind(this);

  }

  componentWillMount() {
    if(!this.props.card.usercards[0]) {
      this.createCard();
      //console.log("Create");
      this.setState({card: this.props.card});
    } else {
      this.setState({card: this.props.card, points: this.props.card.usercards[0].points, favorite: this.props.card.usercards[0].favorite});
    }
  }

  componentWillUnmount() {
    this.setState({punch: false});
  }

  async createCard() {
    var url = 'https://flyerentapi.herokuapp.com/card/createusercard';
    //var url = 'http://localhost:3000/card/createusercard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: this.props.token, userId: this.props.user.id, cardId: this.props.card.id, divisionId: this.props.division.id})
      });

      let responseJson = await response.json();

      if (responseJson.response.success == true) {
        //console.log(responseJson.response.success);
        this.setState({points: responseJson.response.usercard.points, favorite: responseJson.response.usercard.favorite});
        //console.log(this.state.card);
        return null;
      } else {
        return null;
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getCard() {
    var url = 'https://flyerentapi.herokuapp.com/card/getusercard';
    //var url = 'http://localhost:3000/card/getusercard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: this.props.token, userId: this.props.user.id, cardId: this.props.card.id})
      });

      let responseJson = await response.json();

      if (responseJson.response.success == true) {
        //console.log(responseJson.response.success);
        this.setState({points: responseJson.response.usercard.points, favorite: responseJson.response.usercard.favorite});
        //console.log(this.state.card);
        return null;
      } else {
        return null;
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async favorite() {
    var url = 'https://flyerentapi.herokuapp.com/card/updateusercard';
    //var url = 'http://localhost:3000/card/updateusercard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: this.props.token, userId: this.props.user.id, cardId: this.props.card.id})
      });

      let responseJson = await response.json();

      if (this.state.favorite == 0) {
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
    //this.setState({punch: true});
    if (this.state.points < this.props.card.total) {
      console.log(this.props.user);
      console.log(this.props.card);
      this.props.navigator.push({id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card});
    }
  }

  redeem() {
    //this.setState({punch: true});

    if(this.props.card.name == 'Frequent Flyer' >= 5 || this.state.points == this.props.card.total) {
      this.props.navigator.push({id: 'PunchQR', user: this.props.user, token: this.props.token, card: this.state.card});
    } else {
      return null;
    }

  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getCard().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    if (this.state.points == undefined) {
      this.createCard();
    }

    if (this.state.punch == true) {
      this.createCard();
    }

    var fav,
      favWord;
    if (this.state.favorite == 1) {
      fav = "heart"
      favWord = "Favorited!"
    } else {
      fav = "heart-o"
      favWord = "Click to Favorite!"
    }

    var StusVIP = "";
    if (this.props.division.name == 'Stuarts Landing' && this.state.points == 20) {
      StusVIP = "| You are a Stu's VIP!";
    }

    return (
      <View style={styles.container}>
        <ScrollView refreshControl={< RefreshControl refreshing = {
          this.state.refreshing
        }
        onRefresh = {
          this.onRefresh.bind(this)
        } />}>

          <View style={{
            marginTop: 20
          }}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 40
            }}>
            {this.props.card.name} Card {StusVIP}
            </Text>

            <AnimatedGaugeProgress size={260} width={50} fill={(this.state.points / this.props.card.total) * 100} style={{
              alignItems: 'center'
            }} rotation={90} cropDegree={150} tintColor="#CC0F40" backgroundColor="#ff9999" strokeCap="circle"/>

            <View style={{
              alignItems: 'center',
              marginTop: -170
            }}>
              <Text style={{
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 45,
                color: '#3f3f3f',
                marginBottom: 18
              }}>{this.props.card.total - this.state.points}</Text>
              <Text style={{
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#3f3f3f',
                marginTop: -25
              }}>more punches</Text>
              <Text style={{
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#3f3f3f'
              }}>until next reward</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.navigateToQR.bind(this)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Punch</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redeem.bind(this)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Redeem</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{
            alignItems: 'center',
            marginTop: 60
          }}>
            <TouchableOpacity onPress={this.favorite.bind(this)}>
              <View style={{
                flexDirection: 'row'
              }}>
                <Icon name={fav} size={24} color="#CC0F40" />
                <Text style={{
                  marginLeft: 10, marginTop: 4
                }}>{favWord}</Text>
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
  buttonContainer: {
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily: 'avenir',
    fontWeight: 'bold',
    fontSize: 14,
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
