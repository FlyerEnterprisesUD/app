import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, Image, Dimensions, TouchableHighlight } from 'react-native';
import DivisionBubbles from '../components/DivisionBubbles';
import Carousel from 'react-native-carousel';

let  promotions =  [
    {
      "image": "http://i1.wp.com/flyerenterprises.com/wp-content/uploads/2016/01/IMG_2516.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i1.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/Copy-of-IMG_2429.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 2",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i0.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/Copy-of-IMG_2389.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 3",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i0.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/IMG_2555-1.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 4",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i2.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/IMG_2504.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 5",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i1.wp.com/flyerenterprises.com/wp-content/uploads/2016/03/IMG_2611.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 6",
      "location": "All",
      "body": "THis is a full story"
    },
    {
      "image": "http://i2.wp.com/flyerenterprises.com/wp-content/uploads/2016/01/IMG_2450.jpg?zoom=2&resize=1180%2C300",
      "title": "Comment 7",
      "location": "All",
      "body": "THis is a full story"
    }
  ]



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: []
    }
    this.getPromotions = this.getPromotions.bind(this);
  }

  navigateTo(promo) {
    this.props.navigator.push({id: 'Promotion', promo: promo});
  }

  componentWillMount() {
    this.getPromotions();
  }

  async getPromotions() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/promotions-general';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ promotions: responseJson.promotions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {

    return(
      <View style={ styles.container }>
        <DivisionBubbles navigator={ this.props.navigator }/>

        <Carousel animate={true} delay={5000} indicatorAtBottom={true} indicatorOffset={0}>
          {
            promotions.map((l, i) => (
              <View key={i}>
                <Image style={styles.image} source={{uri: l.image}}>
                <TouchableHighlight onPress={this.navigateTo.bind(this, l)}>
                  <View>
                    <Text style={styles.text}>{l.title}</Text>
                  </View>
                  </TouchableHighlight>
                </Image>
              </View>
            ))
          }

        </Carousel>

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
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 145
  },
  text: {
    backgroundColor: 'rgba(220,220,220,.9)',
    padding: 10,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Home;
