import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user: {},
      error: ''
    };
    this.login = this.login.bind(this);
  }

  async login() {
    let username = this.state.username;
    let password = this.state.password;

    if(username == 'FlyerEntDev' && password == '123456') {
      this.props.navigator.replace({id: 'App', user: username});
    } else {
      this.setState({error: 'Username or Password Incorrect'});
    }


  }

  render() {
    return(
      <View style={ styles.container }>

        <Text style={ styles.title }>Flyer Enterprises</Text>

        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.username }
          onChangeText={(text) => this.setState({username: text})}
          style={ styles.input }
          keyboardType='default' />

        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.password }
          onChangeText={(text) => this.setState({password: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <TouchableOpacity onPress={ this.login }>
          <Text style={ styles.button }>Login</Text>
        </TouchableOpacity>

        <Text style={ styles.text }>Forgot Password?</Text>

        <Text style={ styles.text }>{ this.state.error }</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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
  text: {
    marginLeft: 30
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
  title: {
    textAlign: 'center'
  }
});

module.exports = Login;
