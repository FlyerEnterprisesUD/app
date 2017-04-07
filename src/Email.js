import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Card } from 'react-native-elements';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: ''
    };
    this.resetpassword = this.resetpassword.bind(this);
  }

  async resetpassword() {
    this.setState({ error: '' });

    // Gets info from the state
    let email = this.state.email.trim();

    // Checks if any are empty
    if(email == '') {
      this.setState({ error: 'Please enter an email' });
      this.refs.email.focus();
      return null;
    }

    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/resetpassword';
    //var url = 'http://localhost:5000/user/resetpassword';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        this.setState({ error: responseJson.response.message });
        return responseJson;
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
        <View>
          <Card>
            <View style={styles.inputContainer}>
              <TextInput
                ref="email"
                placeholder="Email"
                style={{height: 20}}
                autoCapitalize="none"
                autoCorrect={false}
                value={ this.state.email }
                onChangeText={(text) => this.setState({email: text})}
                keyboardType='email-address'
                onSubmitEditing={(event) => {
                  this.resetpassword();
                }} />
            </View>
            <Text style={ styles.error }>{ this.state.error }</Text>
          </Card>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={ this.login }>
              <Text style={styles.button}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3478bc',
    justifyContent: 'center'
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

module.exports = Email;
