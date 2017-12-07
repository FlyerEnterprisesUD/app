import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Dimensions, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, AsyncStorage, AlertIOS } from 'react-native';
import Spinner from 'react-native-spinkit';
import { List, ListItem } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import DeviceInfo from 'react-native-device-info';
import TouchID from 'react-native-touch-id';

var deviceToken;

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      spinner: false,
      username: '',
      password: '',
      user: {},
      token: '',
      error: ''
    };

    this.getCredentials = this.getCredentials.bind(this);
    this.login = this.login.bind(this);
    this.persistToken = this.persistToken.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
    this.sendToken = this.sendToken.bind(this);
    this.setVariables = this.setVariables.bind(this);
    this.guest = this.guest.bind(this);
    this.navigateToCreate = this.navigateToCreate.bind(this);
    this.navigateToEmail = this.navigateToEmail.bind(this);
    this.getUserPass = this.getUserPass.bind(this);
  }

  componentWillMount() {
    this.setState({spinner: false});
    this.checkToken();
  }

  getCredentials(username, password) {
    console.log(username + " " + password);
    this.setState({username: username, password: password, spinner: true}, function() {
      this.login();
    });
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
        console.log("token");
      } else {
        this.getUserPass();
        console.log("no token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getUserPass() {
    try {
      const username = await AsyncStorage.getItem('username', username);
      const password = await AsyncStorage.getItem('password', password);
      const touchid = await AsyncStorage.getItem('touchid', touchid);

      console.log("touch");

      if (username !== null && password !== null && touchid !== null){
        console.log(username, password);
        if(touchid == 'true') {
          TouchID.authenticate()
            .then(success => {
              this.setState({spinner: true});
              this.loginWithParams(username, password);
            })
            .catch(error => {

            });
        } else {

        }

      } else {


      }
    } catch (error) {
      console.log(error);
    }
  }

  async verifyToken() {
    let token = this.state.token;
    console.log("verify");
    if(token != '') {
      this.setState({spinner: true});
      var url = 'https://flyerentapi.herokuapp.com/user/verify';
      //var url = 'http://localhost:3000/user/verify';

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
          this.setState({spinner: false});
          this.setState({ error: responseJson.response.message });
          AlertIOS.alert(
           'Error',
           responseJson.response.message
          );

          const username = await AsyncStorage.getItem('username', '');
          const password = await AsyncStorage.getItem('password', '');
          const touchid = await AsyncStorage.getItem('touchid', '');
          AsyncStorage.setItem('token', '').done();

          return responseJson;
        } else {
          this.setState({spinner: false});
          this.setState({ user: responseJson.response.user });
          this.setVariables();
          this.props.navigator.replace({id: 'App', user: this.state.user, token: this.state.token});
        }

      } catch (err) {
        this.setState({spinner: false});
        this.setState({ error: responseJson.response.message });
        AlertIOS.alert(
         'Error',
         responseJson.response.message
        );

        const username = await AsyncStorage.getItem('username', '');
        const password = await AsyncStorage.getItem('password', '');
        const touchid = await AsyncStorage.getItem('touchid', '');
        AsyncStorage.setItem('token', '').done();

        console.log(err);
      }
    } else {
      console.log('this ran first again');
    }
  }

  async setVariables() {
    try {
      const devicetoken = await AsyncStorage.getItem('devicetoken', devicetoken);
      if (devicetoken !== null){
        //this.setState({deviceToken: devicetoken});
        deviceToken = devicetoken;
        this.sendToken();
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async sendToken() {
    var url = 'https://flyerentapi.herokuapp.com/user/createtoken';
    //var url = 'http://localhost:3000/user/createtoken';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: deviceToken,
          userId: this.state.user.id,
        })
      });

      let responseJson = await response.json();

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async login() {
    // Gets info from the state
    let username = this.state.username.trim();
    let password = this.state.password.trim();
    console.log(username, password);

    var url = 'https://flyerentapi.herokuapp.com/user/login';
    //var url = 'http://localhost:3000/user/login';

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
        this.setState({ spinner: false });
        this.setState({ error: responseJson.response.message });
        AlertIOS.alert(
         'Error',
         responseJson.response.message
        );
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.setState({ token: responseJson.response.token });
        AsyncStorage.setItem('username', username).done();
        AsyncStorage.setItem('password', password).done();
        this.persistToken();
        this.setVariables();
        this.props.navigator.replace({id: 'App', user: this.state.user, token: this.state.token});
      }

    } catch (err) {
      console.error(err);
    }
  }

  async loginWithParams(user, pass) {

    var url = 'https://flyerentapi.herokuapp.com/user/login';
    //var url = 'http://localhost:3000/user/login';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: user,
          password: pass
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        this.setState({ spinner: false });
        this.setState({ error: responseJson.response.message });
        AlertIOS.alert(
         'Error',
         responseJson.response.message
        );
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.setState({ token: responseJson.response.token });
        this.persistToken();
        this.setVariables();
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
    var content = this.state.spinner ? <SpinnerContent /> : <MainContent username={this.state.username} password={this.state.password} login={this.getCredentials} guest={this.guest} email={this.navigateToEmail} create={this.navigateToCreate}/>;
    return(
      <View style={{height: Dimensions.get('window').height}}>
        {content}
      </View>
    );
  }
}

class SpinnerContent extends Component {
  render() {
    return(
      <View style={styles.spinnerContainer}>
        <Spinner isVisible={true} size={100} type="Wave" color="#FFFFFF" />
      </View>
    );
  }
}

class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.sendCredentials = this.sendCredentials.bind(this);
  }

  componentWillMount() {
    this.setState({username: this.props.username, password: this.props.password, error: this.props.error});
  }

  sendCredentials() {
    // Checks if any are empty
    if(this.state.username == '' || this.state.password == '') {
      AlertIOS.alert(
       'Error',
       'Enter All Fields'
      );
      return null;
    }

    this.props.login(this.state.username, this.state.password);
  }

  render() {
    const logo = require('./images/circle_only_white.png');

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Image
            style={{width: 175, height: 175}}
            source={logo}
          />
        </View>
        <ScrollView style={styles.center} scrollEnabled={false} centerContent={true} >
          <View style={{padding: 16}}>
            <Fumi
              label={'Username'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
              ref={'Username'}
              onSubmitEditing={(event) => {
                this.refs.password.focus();
              }}
            />
            <Fumi
              style={{marginTop: 4}}
              label={'Password'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              ref={'password'}
              onSubmitEditing={(event) => {
                this.sendCredentials();
              }}
            />
            <View style={styles.buttons}>
              <TouchableOpacity>
                <Text style={styles.button} onPress={this.props.create}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.button} onPress={this.sendCredentials}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity onPress={this.props.email}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14}}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
            <ListItem
              title='Continue as a Guest'
              titleStyle={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}
              containerStyle={{backgroundColor: 'rgba(1, 69, 137, 0.8)', borderBottomWidth: 0}}
              chevronColor={'#FFFFFF'}
              onPress={this.props.guest}
            />
          </List>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

  const styles = StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      backgroundColor: '#3478bc',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mainContainer: {
      flex: 1,
      backgroundColor: '#3478bc',
      justifyContent: 'space-between'
    },
    top: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,

    },
    center: {
      height: 500,
      marginTop: -100
    },
    bottom: {

    },
    buttons: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    button: {
      backgroundColor: '#CC0F40',
      color: '#FFFFFF',
      padding: 16,
      width: (Dimensions.get('window').width / 2) - 20,
      textAlign: 'center',
      fontFamily: 'avenir',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 4
    }
  });
