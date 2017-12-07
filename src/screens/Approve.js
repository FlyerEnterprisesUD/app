import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Promotion from '../components/Promotion';

class ApprovePush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      divisions: []
    };
    this.getUnapproved = this.getUnapproved.bind(this);
  }

  componentWillMount() {
    this.getUnapproved();
  }

  async getUnapproved() {
    var url = 'https://flyerentapi.herokuapp.com/promotion/getunapproved';
    //var url = 'http://localhost:3000/promotion/getunapproved';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token
        })
      });

      let responseJson = await response.json();

      this.setState({ divisions: responseJson.response.promotions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getUnapproved().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
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

          {
            this.state.divisions.map((l, i) => (

              <Promotion key={i} division={l} navigator={this.props.navigator} user={this.props.user}/>

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
    backgroundColor: '#f2f2f2',
    marginTop: 65
  },
  section: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ApprovePush;
