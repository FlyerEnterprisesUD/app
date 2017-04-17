import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card } from 'react-native-elements';

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={ styles.container }>
        <Spinner visible={this.state.visible} />
        <View>
          <Text style={{fontFamily:'LabradorA-Bold', fontSize: 50, color: '#FFFFFF', textAlign: 'center', marginBottom: 10}}>Flyer Enterprises</Text>
          <Card>
            <View style={styles.inputContainer}>
              <TextInput
                ref="username"
                placeholder="Username"
                style={{height: 20}}
                autoCapitalize="none"
                autoCorrect={false}
                value={ this.state.username }
                onChangeText={(text) => this.setState({username: text})}
                keyboardType='default'
                onSubmitEditing={(event) => {
                  this.refs.password.focus();
                }} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                ref="password"
                placeholder="Password"
                style={{height: 20, marginTop: 10}}
                autoCapitalize="none"
                autoCorrect={false}
                value={ this.state.password }
                onChangeText={(text) => this.setState({password: text})}
                keyboardType='default'
                secureTextEntry
                onSubmitEditing={(event) => {
                  this.refs.passwordAgain.focus();
                }} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                ref="passwordAgain"
                placeholder="Password Again"
                style={{height: 20, marginTop: 10}}
                autoCapitalize="none"
                autoCorrect={false}
                value={ this.state.passwordAgain }
                onChangeText={(text) => this.setState({passwordAgain: text})}
                keyboardType='default'
                secureTextEntry
                onSubmitEditing={(event) => {
                  this.refs.email.focus();
                }} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                ref="email"
                placeholder="Dayton Email"
                style={{height: 20, marginTop: 10}}
                autoCapitalize="none"
                autoCorrect={false}
                value={ this.state.email }
                onChangeText={(text) => this.setState({email: text})}
                keyboardType='email-address'
                onSubmitEditing={(event) => {
                  this.create();
                }} />
            </View>
            <Text style={ styles.error }>{ this.state.error }</Text>
          </Card>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={ this.create }>
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={ styles.message }>*Email confirmation may take a couple minutes to come to you</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#3478bc'
  },
  inputContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3'
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  button: {
    color: '#FFFFFF',
    padding: 15,
    backgroundColor: 'rgba(103, 171, 239, 0.5)',
    width: Dimensions.get('window').width - 30,
    textAlign: 'center'
  },
  error: {
    marginTop: 5,
    color: '#cc0000'
  },
  message: {
    color: '#FFFFFF',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 10
  }
});

module.exports = Create;
