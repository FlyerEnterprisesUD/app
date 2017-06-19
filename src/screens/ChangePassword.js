import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPass: '',
      newPass: '',
      newPassAgain: '',
      error: ''
    };
    this.changePassword = this.changePassword.bind(this);
  }

  async changePassword() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/changepassword';
    //var url = 'http://localhost:5000/user/changepassword';

    // Gets info from the state
    let username = this.state.username.trim();
    let password = this.state.password.trim();

    // Checks if any are empty
    if(username == '' || password == '') {
      this.setState({ error: 'All fields are required' });
      if(username == ''){
        this.refs.username.focus();
        this.setState({ visible: false });
        return null;
      } else {
        this.refs.password.focus();
        this.setState({ visible: false });
        return null;
      }
    }



    if(this.state.password != this.state.passwordAgain) {
      this.setState({ error: 'Passwords must match', password: '', passwordAgain: '' });
      this.refs.password.focus();
      this.setState({ visible: false });
      return null;
    }

    if(this.state.password.length < 8) {
      this.setState({ error: 'Password must be longer than 8 characters', password: '', passwordAgain: '' });
      this.refs.password.focus();
      this.setState({ visible: false });
      return null;
    }

    var counter = 0;
    if (/[a-z]/.test(this.state.password)) {
        counter++;
    }
    if (/[A-Z]/.test(this.state.password)) {
        counter++;
    }

    if(counter < 2) {
      this.setState({ error: 'Password must have at least one lowercase and uppercase letter', password: '', passwordAgain: '' });
      this.refs.password.focus();
      this.setState({ visible: false });
      return null;
    }

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.props.user.username,
          oldPassword: this.state.oldPass,
          newPassword: this.state.newPass
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        this.setState({ error: responseJson.response.message });
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.props.navigator.replace({id: 'Home'});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return(
      <View style={ styles.container }>

        <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Old Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.oldPass }
          onChangeText={(text) => this.setState({oldPass: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <TextInput
          placeholder="New Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.newPass }
          onChangeText={(text) => this.setState({newPass: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <TextInput
          placeholder="New Password Again"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.newPassAgain }
          onChangeText={(text) => this.setState({newPassAgain: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <Text style={ styles.error }>{ this.state.error }</Text>

        <TouchableOpacity onPress={ this.changePassword }>
          <Text style={ styles.button }>Change Password</Text>
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
  },
  error: {
    marginLeft: 30,
    color: '#cc0000'
  }
});

module.exports = ChangePassword;
