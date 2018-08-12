import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import Display from 'react-native-display';

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: {}
    }

    this.getCountDown = this.getCountDown.bind(this);
  }

  componentWillMount() {
    this.getCountDown();
  }

  navigateToCountDown(bundle, countdown) {
    this.props.navigator.push({id:'Bundle', user: this.props.user, bundle: bundle, countdown: countdown, token: this.props.token });
  }

  async getCountDown() {
    var url = 'https://flyerentapi.herokuapp.com/card/getcountdown';
    //var url = 'http://localhost:3000/card/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.props.countdown.countDownId,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        console.log("Fdajnod")
      }

      this.setState({ countdown: responseJson.response.countdown });
      console.log(this.state.countdown);


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    var CardImg = require('../images/blankcard.jpg');

    //console.log(this.props.division)

      return (

        <View>
          <TouchableOpacity onPress={this.navigateToCountDown.bind(this, this.props.countdown, this.state.countdown)}>
            <View style={styles.card}>
              <Image style={styles.image} source={CardImg} />
              <View style={styles.textContainer}>
                <Text style={styles.textBold}>{this.state.countdown.name}</Text>
                <Text style={styles.textBold}>{this.state.countdown.total - this.props.countdown.points} punches left</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      );
    }


  }

let styles = StyleSheet.create({
  card: {
    borderColor: '#D3D3D3',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 5,
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
  }
});

export default CountDown;
