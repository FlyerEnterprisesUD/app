import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl
} from 'react-native';
import Display from 'react-native-display';
import Card from '../components/Card';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      division: {},
      cards: true
    };

    this.getCards = this.getCards.bind(this);
  }

  componentWillMount() {
    this.setState({division: this.props.division});
    console.log(this.props.division);


    if(this.props.division.cards[0]) {
      this.setState({cards: true});
    } else {
      this.setState({cards: false});
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getCards().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getCards() {
    var url = 'https://flyerentapi.herokuapp.com/card/get';
    //var url = 'http://localhost:3000/card/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id,
          divisionId: this.props.division.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        console.log("Fdajnod")
      }

      this.setState({ division: responseJson.response.division });
      console.log(this.state.division);


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
      >

      <Display enable={this.state.cards}>
      <View>
      {
        this.state.division.cards.map((l, i) => (
          <Card key={i} division={this.state.division} card={l} navigator={this.props.navigator} user={this.props.user} token={this.props.token}/>
        ))
      }
      </View>
      </Display>

      <Display enable={!this.state.cards}>
        <Text style={styles.no}>There are no reward cards for this division.</Text>
      </Display>


      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  no: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default Cards;
