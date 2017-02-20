import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    AsyncStorage.setItem('token', '').done();
    this.props.nav.replace({id: 'Login'});
  }

  render() {
    console.log(this.props);
    return(
      <View style={ styles.container }>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.email}</Text>

        <TouchableOpacity onPress={ this.logout }>
          <Text style={ styles.button }>Logout</Text>
        </TouchableOpacity>
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
  button: {
    width: Dimensions.get('window').width - 60,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

module.exports = Settings;
