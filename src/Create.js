import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordAgain: '',
      email: '',
      error: '',
      visible: false
    };
    this.create = this.create.bind(this);
  }

  // Create method
  async create() {
    this.setState({ visible: true });
    this.setState({ error: '' });
    // Gets info from the state
    let username = this.state.username.trim();
    let password = this.state.password.trim();
    let email = this.state.email.trim();

    // Checks if any are empty
    if(username == '' || password == '' || email == '') {
      this.setState({ error: 'All fields are required' });
      if(username == ''){
        this.refs.username.focus();
        this.setState({ visible: false });
        return null;
      } else if(password == '') {
        this.refs.password.focus();
        this.setState({ visible: false });
        return null;
      } else {
        this.refs.email.focus();
        this.setState({ visible: false });
        return null;
      }
    }

    //Check if valid email
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){
      this.setState({ error: 'Must be valid email' });
      this.refs.email.focus();
      this.setState({ visible: false });
      return null;
    }

    //Check if Dayton email
    if(!email.includes("@udayton.edu")){
      this.setState({ error: 'Please enter your University of Dayton email' });
      this.refs.email.focus();
      this.setState({ visible: false });
      return null;
    }

    if(this.state.password != this.state.passwordAgain) {
      this.setState({ error: 'Passwords must match', password: '', passwordAgain: '' });
      this.refs.password.focus();
      this.setState({ visible: false });
      return null;
    }

    // Connects to API
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/create';
    //var url = 'http://localhost:5000/user/create';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email
        })
      });

      let responseJson = await response.json();

      // Check if anything is wrong
      if(responseJson.response.success == false) {
        this.setState({ error: responseJson.response.message });
        this.refs.username.setNativeProps({text: ''});
        this.refs.password.setNativeProps({text: ''});
        this.setState({ visible: false });
        this.refs.username.focus();
      } else {
        this.props.navigator.replace({id: 'Login'});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return(
      <View style={ styles.container }>
      <Spinner visible={this.state.visible} />

        <View>
        <Text style={ styles.title }>Sign Up</Text>
        </View>

        <View>

        <TextInput
          ref="username"
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.username }
          onChangeText={(text) => this.setState({username: text})}
          style={ styles.input }
          keyboardType='default' />

        <TextInput
          ref="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.password }
          onChangeText={(text) => this.setState({password: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <TextInput
          ref="passwordAgain"
          placeholder="Password Again"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.passwordAgain }
          onChangeText={(text) => this.setState({passwordAgain: text})}
          style={ styles.input }
          keyboardType='default'
          secureTextEntry  />

        <TextInput
          ref="email"
          placeholder="Dayton Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.email }
          onChangeText={(text) => this.setState({email: text})}
          style={ styles.input }
          keyboardType='default' />

        <Text style={ styles.error }>{ this.state.error }</Text>
        </View>

        <View >
          <TouchableOpacity onPress={ this.create }>
            <Text style={ styles.button }>Create Account</Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
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
  },
  button: {
    width: Dimensions.get('window').width,
    padding: 15,
    backgroundColor: '#014589',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 100
  }
});

module.exports = Create;
