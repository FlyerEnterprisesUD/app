import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      changed: false
    };
  }

  render() {
    return(
      <View style={ styles.container }>

        <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Old Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.username }
          onChangeText={(text) => this.setState({username: text})}
          style={ styles.input }
          keyboardType='default'
          editable={false} />

        <TextInput
          placeholder="New Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.email }
          onChangeText={(text) => this.setState({email: text})}
          style={ styles.input }
          keyboardType='default'
          editable={false} />

        <TouchableOpacity>
          <Text style={ styles.button }>Update Profile</Text>
        </TouchableOpacity>
        </View>


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
  },
  input: {
    height: 35,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 4,
    alignItems: 'center'
  }
});

module.exports = AccountSettings;
