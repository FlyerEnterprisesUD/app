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

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: {},
      points: 0,
      refreshing: false,
      punch: false
    };
    this.getUserCountdown = this.getUserCountdown.bind(this);

  }

  componentWillMount() {
    this.setState({countdown: this.props.bundle, points: this.props.bundle.points});
  }

  componentWillUnmount() {
    this.setState({punch: false});
  }

  async getUserCountdown() {
    var url = 'https://flyerentapi.herokuapp.com/card/getusercountdown';
    //var url = 'http://localhost:3000/card/getusercard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.countdown.id
        })
      });

      let responseJson = await response.json();

      if (responseJson.response.success == true) {
        //console.log(responseJson.response.success);
        this.setState({points: responseJson.response.usercountdown.points, countdown: responseJson.response.usercountdown});
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

  navigateToQR() {
    //this.setState({punch: true});
    if (this.state.points != this.props.countdown.total) {
      this.props.navigator.push({id: 'PunchCountDownQR', user: this.props.user, token: this.props.token, bundle: this.state.countdown});
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getUserCountdown().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {


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
            {this.props.countdown.name} Bundle
            </Text>

            <AnimatedGaugeProgress size={260} width={50} fill={(this.state.points / this.props.countdown.total) * 100} style={{
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
                marginBottom: 8
              }}>{this.props.countdown.total - this.state.points}</Text>
              <Text style={{
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#3f3f3f',
                marginTop: -10
              }}>punches left</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.navigateToQR.bind(this)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Punch</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.text}>
              {this.props.countdown.description}
            </Text>
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
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    marginTop: 25,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40
  }
});

export default Bundle;
