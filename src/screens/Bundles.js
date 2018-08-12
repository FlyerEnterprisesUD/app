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
import CountDown from '../components/CountDown';

class Bundles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      usercountdowns: [],
      cards: true
    };

    this.getUserCountDowns = this.getUserCountDowns.bind(this);
  }

  componentWillMount() {
    this.getUserCountDowns();
    console.log(this.state.usercountdowns)
    console.log(this.props.user)
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getUserCountDowns().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getUserCountDowns() {
    var url = 'https://flyerentapi.herokuapp.com/card/getusercountdowns';
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
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        console.log("Fdajnod")
      }

      this.setState({ usercountdowns: responseJson.response.usercountdowns });
      console.log(this.state.usercountdowns);


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
      <View style={styles.main}>
      {
        this.state.usercountdowns.map((l, i) => (
          <CountDown key={i} countdown={l} navigator={this.props.navigator} user={this.props.user} token={this.props.token}/>
          //<Text key={i}>HI</Text>
        ))
      }
      </View>
      </Display>

      <Display enable={!this.state.cards}>
        <Text style={styles.no}>You have no card bundles.</Text>
      </Display>


      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  main: {
    marginTop: 70
  },
  no: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70
  }
});

export default Bundles;
