import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import moment from 'moment-timezone';
import Display from 'react-native-display';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      promotions: [],
      division: '',
      promos: true
    };
    this.getPromotions = this.getPromotions.bind(this);
  }

  componentWillMount() {
    this.setState({promotions: this.props.division.promotions, division: this.props.division.name});

    if(this.props.division.promotions[0]) {
      this.setState({promos: true});
    } else {
      this.setState({promos: false});
    }
  }

  async getPromotions() {
    var url = 'https://flyerentapi.herokuapp.com/promotion/get';
    //var url = 'http://localhost:3000/promotion/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: this.props.division.division.id
        })
      });

      let responseJson = await response.json();

      this.setState({ promotions: responseJson.response.promotions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getPromotions().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToPromotion(promotion) {
    this.props.navigator.push({id: 'Promotion', user: this.props.user, division: this.state.division, token: this.props.token, promotion: promotion});
  }

  render() {
    var blankCard = require('../images/blankcard.jpg');

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

          <Display enable={this.state.promos}>
          {
            this.state.promotions.map((l, i) => (
              <TouchableOpacity key={i} onPress={this.navigateToPromotion.bind(this, l)}>
                <View style={styles.card}>
                  <Image style={styles.image} source={blankCard} />
                  <View style={styles.textContainer}>
                    <Text style={styles.textBold}>{l.name}</Text>
                    <Text style={styles.text}>{this.state.division}</Text>
                    <Text style={styles.textBold}>{moment(l.startTime).format("MMM DD")} - {moment(l.endTime).format("MMM DD")}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          }
          </Display>

          <Display enable={!this.state.promos}>
            <Text style={styles.no}>There are no promotions for this division.</Text>
          </Display>

        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  card: {
    borderColor: '#D3D3D3',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
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
    fontSize: 20
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

export default Promotions
