import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  AlertIOS
} from 'react-native';
import Spinner from 'react-native-spinkit';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

export default class Email extends Component {
  constructor() {
    super();
    this.state = {
      spinner: false,
      email: ''
    };
    this.getCredentials = this.getCredentials.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  componentWillMount() {
    this.setState({spinner: false});
  }

  getCredentials(email) {
    this.setState({
      email: email,
      spinner: true
    }, function() {
      this.resetPassword();
    });
  }

  async resetPassword() {
    // Gets info from the state
    let email = this.state.email.trim();

    var url = 'https://flyerentapi.herokuapp.com/user/resetpassword';
    //var url = 'http://localhost:3000/user/resetpassword';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email})
      });

      let responseJson = await response.json();

      if (responseJson.response.success == false) {
        this.setState({spinner: false});
        AlertIOS.alert('Error', responseJson.response.message);
        return null;
      } else {
        this.props.navigator.replace({id: 'Login'});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    var content = this.state.spinner
      ? <SpinnerContent/>
      : <MainContent email={this.state.email} reset={this.getCredentials}/>;
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
      email: ''
    };

    this.sendCredentials = this.sendCredentials.bind(this);
  }

  componentWillMount() {
    this.setState({email: this.props.email});
  }

  sendCredentials() {
    // Checks if any are empty
    if (this.state.email == '') {
      AlertIOS.alert('Error', 'Enter All Fields');
      return null;
    }

    this.props.reset(this.state.email);
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
            <Fumi label={'Email'} labelStyle={{
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
            <View style={styles.buttons}>
              <TouchableOpacity>
                <Text style={styles.button} onPress={this.sendCredentials}>Reset Password</Text>
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
