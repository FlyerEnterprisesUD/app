import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card, List, ListItem } from 'react-native-elements';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: '',
      user: {},
      error: '',
      visible: false
    };
    this.login = this.login.bind(this);
    this.navigateToCreate = this.navigateToCreate.bind(this);
    this.navigateToEmail = this.navigateToEmail.bind(this);
    this.persistToken = this.persistToken.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
    this.guest = this.guest.bind(this);
  }

  componentWillMount() {
    this.setState({ visible: false });
    this.setState({ error: '' });
    this.checkToken();
  }

  persistToken() {
    let token = this.state.token;
    AsyncStorage.setItem('token', token).done();
  }

  async checkToken() {
    try {
      const token = await AsyncStorage.getItem('token', token);
      if (token !== null){
        this.setState({token: token});
        this.verifyToken();
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async verifyToken() {
    let token = this.state.token;
    if(token != '') {
      var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/verify';
      //var url = 'http://localhost:5000/auth/verify';

      try {
        let response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: token,
          })
        });

        let responseJson = await response.json();

        if(responseJson.response.success == false) {
          this.setState({ error: responseJson.response.message });
          return responseJson;
        } else {
          this.setState({ user: responseJson.response.user });
          this.props.navigator.replace({id: 'App', user: this.state.user, token: this.state.token});
        }

      } catch (err) {
        console.error(err);
      }
    } else {
      console.log('this ran first again');
    }
  }

  async login() {
    this.setState({ visible: true });
    this.setState({ error: '' });

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

    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/login';
    //var url = 'http://localhost:5000/user/login';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        this.setState({ visible: false });
        this.setState({ error: responseJson.response.message });
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.setState({ token: responseJson.response.token });
        this.persistToken();
        this.props.navigator.replace({id: 'App', user: this.state.user, token: this.state.token});
      }

    } catch (err) {
      console.error(err);
    }
  }

  guest() {
    var user = {
      username: 'Guest',
      name: 'Guest'
    };
    this.props.navigator.replace({id: 'App', user: user});
  }

  navigateToCreate() {
    this.props.navigator.push({id: 'Create'});
  }

  navigateToEmail() {
    this.props.navigator.push({id: 'Email'});
  }

  render() {
    const logo = require('./images/circle_only_white.png');
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={ styles.container }>
        <Spinner visible={this.state.visible} />
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 175, height: 175}}
            source={logo}
          />
        </View>
        <View>
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
                  this.login()
                }} />
            </View>
            <Text style={ styles.error }>{ this.state.error }</Text>
          </Card>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={ this.login }>
              <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={ this.navigateToEmail }>
            <Text style={{color: '#FFFFFF', marginLeft: 15, marginTop: 2}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
            <ListItem
              title='Continue as Guest'
              titleStyle={{color: '#FFFFFF'}}
              containerStyle={{backgroundColor: 'rgba(1, 69, 137, 0.8)', borderBottomWidth: 0}}
              chevronColor={'#FFFFFF'}
              onPress={ this.guest } />
            <ListItem
              title='Not a Member? Create An Account'
              titleStyle={{color: '#FFFFFF'}}
              containerStyle={{backgroundColor: 'rgba(1, 69, 137, 0.8)', borderBottomWidth: 0}}
              chevronColor={'#FFFFFF'}
              onPress={ this.navigateToCreate } />
          </List>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3478bc',
    justifyContent: 'space-between'
  },
  inputContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3'
  },
  buttonContainer: {
    marginTop: 10,
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
  }
});

module.exports = Login;
