import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      users: []
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentWillMount() {
    this.getUsers();
  }

  async getUsers() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getusers';
    //var url = 'http://localhost:5000/auth/getusers';

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

      this.setState({ users: responseJson.response.users });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getUsers().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToChangeRole(newUser) {
    this.props.navigator.push({id: 'Change Role', user: this.props.user, token: this.props.token, newUser: newUser});
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
          this.state.users.map((l, i) => (
            <ListItem
              key={i}
              title={l.username}
              subtitle={l.role}
              onPress={this.navigateToChangeRole.bind(this, l)}
            />
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
  }
});

export default Users
