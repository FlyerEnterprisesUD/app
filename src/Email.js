import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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
          email: this.state.email,
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
      <View style={ styles.container }>

        <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.email }
          onChangeText={(text) => this.setState({email: text})}
          style={ styles.input }
          keyboardType='default' />


        <Text style={ styles.error }>{ this.state.error }</Text>

        <TouchableOpacity onPress={ this.resetpassword }>
          <Text style={ styles.button }>Reset Password</Text>
        </TouchableOpacity>
        </View>


      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
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
  }
});

module.exports = Email;
