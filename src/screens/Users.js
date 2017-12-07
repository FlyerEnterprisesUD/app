import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    var url = 'https://flyerentapi.herokuapp.com/user/get';
    //var url = 'http://localhost:3000/user/get';

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
        <View style={{marginBottom: 20, marginTop: 10}}>
        {
          this.state.users.map((l, i) => (
            <View key={i}>
              <TouchableOpacity onPress={this.navigateToChangeRole.bind(this, l)}>
                <View style={styles.section}>
                  <View style={styles.item}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                      <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>{l.username} ({l.role})</Text>
                    </View>
                    <View>
                      <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))
        }
        </View>
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

export default Users
