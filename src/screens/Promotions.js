import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import moment from 'moment-timezone';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      promotions: []
    };
    this.getPromotions = this.getPromotions.bind(this);
  }

  componentWillMount() {
    this.getPromotions();
  }

  async getPromotions() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/getpromotions';
    //var url = 'http://localhost:5000/getpromotions';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          division: this.props.division
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
    this.props.navigator.push({id: 'Promotion', user: this.props.user, token: this.props.token, promotion: promotion});
  }

  render() {
    var blankCard = require('../images/blankcard.jpg');

    return(
      <View style={styles.container}>
        <ScrollView
          style={{marginTop: 5}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >




        {
            this.state.promotions.map((l, i) => (
              <TouchableOpacity key={i} onPress={this.navigateToPromotion.bind(this, l)}>
                <View style={styles.card}>
                  <Image style={styles.image} source={blankCard} />
                  <View style={styles.textContainer}>
                    <Text style={styles.textBold}>{l.title}</Text>
                    <Text style={styles.text}>{l.division}</Text>
                    <Text style={styles.textBold}>{moment(l.time).format("MMM DD")} - {moment(l.end).format("MMM DD")}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  }
});

export default Promotions
