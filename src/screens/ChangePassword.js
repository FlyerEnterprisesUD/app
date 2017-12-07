import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, AlertIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

export default class ChangePassword extends Component {
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
    var url = 'https://flyerentapi.herokuapp.com/user/changepassword';
    //var url = 'http://localhost:3000/user/changepassword';

    // Gets info from the state
    let oldPass = this.state.oldPass.trim();
    let newPass = this.state.newPass.trim();
    let newPassAgain = this.state.newPassAgain.trim();

    // Checks if any are empty
    if(oldPass == '' || newPass == '' || newPassAgain == '') {
      AlertIOS.alert(
       'Error',
       'Please enter all fields'
      );
    }

    if(this.state.newPass != this.state.newPassAgain) {
      AlertIOS.alert(
       'Error',
       'New Passwords Must Match'
      );
      this.setState({ newPass: '', newPassAgain: '' });
      return null;
    }

    if(this.state.newPass.length < 8) {
      AlertIOS.alert(
       'Error',
       'Password must be longer than 8 characters'
      );
      this.setState({ newPass: '', newPassAgain: '' });
      return null;
    }

    var counter = 0;
    if (/[a-z]/.test(this.state.newPass)) {
        counter++;
    }
    if (/[A-Z]/.test(this.state.newPass)) {
        counter++;
    }

    if(counter < 2) {
      this.setState({ newPass: '', newPassAgain: '' });
      AlertIOS.alert(
       'Error',
       'Password must have at least one lowercase and uppercase letter'
      );
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
        AlertIOS.alert(
         'Error',
         responseJson.response.message
        );
        return responseJson;
      } else {
        this.setState({ user: responseJson.response.user });
        this.props.navigator.resetTo({id: 'Home'});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <View>
          <View style={{marginTop: 10, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Old Password'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'lock'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.oldPass}
              onChangeText={(text) => this.setState({oldPass: text})}
              ref={'oldPass'}
              onSubmitEditing={(event) => {
                this.refs.newPass.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'New Password'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'unlock-alt'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.newPass}
              onChangeText={(text) => this.setState({newPass: text})}
              ref={'newPass'}
              onSubmitEditing={(event) => {
                this.refs.newPassAgain.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'New Password Again'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'unlock-alt'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.newPassAgain}
              onChangeText={(text) => this.setState({newPassAgain: text})}
              ref={'newPassAgain'}
            />
          </View>
          <View style={{marginTop: 10, marginBottom: 20}}>
            <TouchableOpacity onPress={this.changePassword}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16}}>Change Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 65
  },
  button: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
    backgroundColor: '#CC0F40',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1,
    alignItems: 'center'
  }
});
