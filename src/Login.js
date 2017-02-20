import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: '',
      user: {},
      error: ''
    };
    this.login = this.login.bind(this);
    this.navigateToCreate = this.navigateToCreate.bind(this);
    this.persistToken = this.persistToken.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  componentWillMount() {
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
          this.props.navigator.replace({id: 'App', user: this.state.user});
        }

      } catch (err) {
        console.error(err);
      }
    } else {
      console.log('this ran first again');
    }
  }

  async login() {
    let username = this.state.username;
    let password = this.state.password;
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
        this.setState({ error: responseJson.response.message });
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.setState({ token: responseJson.response.token });
        this.persistToken();
        this.props.navigator.replace({id: 'App', user: this.state.user});
      }


    } catch (err) {
      console.error(err);
    }
  }

  navigateToCreate() {
    this.props.navigator.push({id: 'Create'});
  }

  render() {
    return(
      <View style={ styles.container }>

        <View>
        <Text style={ styles.title }>Flyer Enterprises</Text>
        </View>

        <View>
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

          <Text style={ styles.error }>{ this.state.error }</Text>

        <TouchableOpacity onPress={ this.login }>
          <Text style={ styles.button }>Login</Text>
        </TouchableOpacity>

        <Text style={ styles.text }>Forgot Password?</Text>


        </View>

        <View >
          <TouchableOpacity onPress={ this.navigateToCreate }>
            <Text style={ styles.button2 }>Create Account</Text>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
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
  error: {
    marginLeft: 30,
    color: '#cc0000'
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
  button2: {
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

module.exports = Login;
