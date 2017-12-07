import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Keyboard,
  AlertIOS,
  TouchableWithoutFeedback,
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import Spinner from 'react-native-spinkit';

export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      spinner: false,
      username: '',
      password: '',
      passwordAgain: '',
      email: '',
      error: ''
    };

    this.getCredentials = this.getCredentials.bind(this);
    this.create = this.create.bind(this);
  }

  componentWillMount() {
    this.setState({spinner: false});
  }

  getCredentials(username, password, email) {
    this.setState({
      username: username,
      password: password,
      email: email,
      spinner: true
    }, function() {
      this.create();
    });
  }

  async create() {
    this.setState({error: ''});

    // Gets info from the state
    let username = this.state.username.trim();
    let password = this.state.password.trim();
    let email = this.state.email.trim();

    console.log(username + ' ' + password + ' ' + email);

    // Connects to API
    var url = 'https://flyerentapi.herokuapp.com/user/create';
    //var url = 'http://localhost:3000/user/create';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password, email: email})
      });

      let responseJson = await response.json();

      // Check if anything is wrong
      if (responseJson.response.success == false) {
        this.setState({spinner: false});
        this.setState({error: responseJson.response.message});
        AlertIOS.alert('Error', responseJson.response.message);
      } else {
        this.setState({spinner: false});
        this.props.navigator.replace({id: 'Login'});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    var content = this.state.spinner
      ? <SpinnerContent/>
      : <MainContent username={this.state.username} password={this.state.password} email={this.state.email} create={this.getCredentials}/>;
    return (
      <View style={{
        height: Dimensions.get('window').height
      }}>
        {content}
      </View>
    );
  }
}

class SpinnerContent extends Component {
  render() {
    return (
      <View style={styles.spinnerContainer}>
        <Spinner isVisible={true} size={100} type="Wave" color="#FFFFFF"/>
      </View>
    );
  }
}

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordAgain: '',
      email: ''
    };
    this.sendCredentials = this.sendCredentials.bind(this);
  }

  componentWillMount() {
    this.setState({username: this.props.username, password: this.props.password, email: this.props.email, error: this.props.error});
  }

  sendCredentials() {
    if (this.state.password !== this.state.passwordAgain) {
      AlertIOS.alert('Error', 'Passwords Must Match');
      return null;
    }

    // Checks if any are empty
    if (this.state.username == '' || this.state.password == '' || this.state.passwordAgain == '' || this.state.email == '') {
      AlertIOS.alert('Error', 'Enter All Fields');
      return null;
    }

    //Check if valid email
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)) {
      AlertIOS.alert('Error', 'Must Be Valid Email');
      return null;
    }

    //Check if Dayton email
    if (!this.state.email.includes('@udayton.edu')) {
      AlertIOS.alert('Error', 'Must Be Dayton Email');
      return null;
    }

    if (this.state.password.length < 7) {
      AlertIOS.alert('Error', 'Password Must Be At Least 8 Characters');
      return null;
    }

    var counter = 0;
    if (/[a-z]/.test(this.state.password)) {
      counter++;
    }

    if (/[A-Z]/.test(this.state.password)) {
      counter++;
    }

    if (counter < 2) {
      AlertIOS.alert('Error', 'Password Must Have At Least One Uppercase And One Lowercase Letter');
      return null;
    }

    this.props.create(this.state.username, this.state.password, this.state.email);
  }

  render() {
    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.mainContainer} scrollEnabled={false} centerContent={true}>
          <View style={{
            padding: 16
          }}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 40,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: 10
            }}>Flyer Enterprises</Text>
            <Fumi label={'Username'} labelStyle={{
              color: '#a3a3a3',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 16
            }} inputStyle={{
              color: '#2e2e2e',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 14
            }} iconClass={FontAwesomeIcon} iconName={'user'} iconColor={'#CC0F40'} iconSize={15} autoCapitalize={'none'} autoCorrect={false} keyboardType={'default'} value={this.state.username} onChangeText={(text) => this.setState({username: text})} ref={'Username'} onSubmitEditing={(event) => {
              this.refs.password.focus();
            }}/>
            <Fumi style={{
              marginTop: 4
            }} label={'Password'} labelStyle={{
              color: '#a3a3a3',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 16
            }} inputStyle={{
              color: '#2e2e2e',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 14
            }} iconClass={FontAwesomeIcon} iconName={'unlock-alt'} iconColor={'#CC0F40'} iconSize={15} autoCapitalize={'none'} autoCorrect={false} keyboardType={'default'} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({password: text})} ref={'password'} onSubmitEditing={(event) => {
              this.refs.passwordAgain.focus();
            }}/>
            <Fumi style={{
              marginTop: 4
            }} label={'Password Again'} labelStyle={{
              color: '#a3a3a3',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 16
            }} inputStyle={{
              color: '#2e2e2e',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 14
            }} iconClass={FontAwesomeIcon} iconName={'unlock-alt'} iconColor={'#CC0F40'} iconSize={15} autoCapitalize={'none'} autoCorrect={false} keyboardType={'default'} secureTextEntry={true} value={this.state.passwordAgain} onChangeText={(text) => this.setState({passwordAgain: text})} ref={'passwordAgain'} onSubmitEditing={(event) => {
              this.refs.email.focus();
            }}/>
            <Fumi style={{
              marginTop: 4
            }} label={'Dayton Email'} labelStyle={{
              color: '#a3a3a3',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 16
            }} inputStyle={{
              color: '#2e2e2e',
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 14
            }} iconClass={FontAwesomeIcon} iconName={'envelope'} iconColor={'#CC0F40'} iconSize={15} autoCapitalize={'none'} autoCorrect={false} keyboardType={'default'} value={this.state.email} onChangeText={(text) => this.setState({email: text})} ref={'email'} onSubmitEditing={(event) => {
              this.sendCredentials();
            }}/>
            <View style={{
              padding: 16,
              marginTop: 4,
              backgroundColor: '#FFFFFF'
            }}>
              <Text style={{
                color: '#2e2e2e',
                fontFamily: 'avenir',
                fontWeight: 'bold',
                fontSize: 16
              }}>Password must be at least 8 characters and have at least one uppercase and lowercase letter</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.button} onPress={this.sendCredentials}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: '#3478bc'
  },
  center: {
    height: 500,
    marginTop: -100
  },
  button: {
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    padding: 16,
    width: Dimensions.get('window').width - 32,
    textAlign: 'center',
    fontFamily: 'avenir',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 4
  }
});
