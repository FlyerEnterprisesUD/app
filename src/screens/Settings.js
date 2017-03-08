import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, AsyncStorage, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.navigateToChangePassword = this.navigateToChangePassword.bind(this);
    this.navigateToAccountSettings = this.navigateToAccountSettings.bind(this);
  }

  logout() {
    AsyncStorage.setItem('token', '').done();
    this.props.nav.replace({id: 'Login'});
  }

  navigateToChangePassword() {
    this.props.navigator.push({id: 'Change Password', user: this.props.user});
  }

  navigateToAccountSettings() {
    this.props.navigator.push({id: 'Account Settings', user: this.props.user});
  }

  render() {
    if(this.props.user.username != "Guest"){
      return(
        <View style={ styles.container }>

          <Text style={{marginTop: 10}}>Profile</Text>
          <List containerStyle={{marginTop:1}}>
            <ListItem
              onPress={this.navigateToAccountSettings}
              key='0'
              title={'Account Settings'}
            />

            <ListItem
              onPress={this.navigateToChangePassword}
              key='1'
              title={'Change Password'}
            />
          </List>

          <TouchableOpacity onPress={ this.logout }>
            <Text style={ styles.button }>Logout</Text>
          </TouchableOpacity>

        </View>
      );
    } else {
      return(
        <View style={ styles.container }>

          <TouchableOpacity onPress={ this.logout }>
            <Text style={ styles.button }>Logout</Text>
          </TouchableOpacity>

        </View>
      );
    }

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
    alignItems: 'center',
    marginTop: 20
  }
});

module.exports = Settings;
