import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput, Picker } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      name: this.props.name,
      year: this.props.year
    };
    this.update = this.update.bind(this);
  }

  async update() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/update';
    //var url = 'http://localhost:5000/user/update';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.props.user.username,
          name: this.state.name,
          year: this.state.year
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        return responseJson;
      } else {
        this.props.navigator.replace({id: 'Home', user: this.props.user});
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
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.username }
          onChangeText={(text) => this.setState({username: text})}
          style={ styles.input }
          keyboardType='default'
          editable={false} />

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.email }
          onChangeText={(text) => this.setState({email: text})}
          style={ styles.input }
          keyboardType='default'
          editable={false} />

        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.name }
          onChangeText={(text) => this.setState({name: text})}
          style={ styles.input }
          keyboardType='default' />

        <Picker
          selectedValue={this.state.year}
          onValueChange={(text) => this.setState({year: text})}>
          <Picker.Item label="Freshman" value="Freshman" />
          <Picker.Item label="Sophomore" value="Sophomore" />
          <Picker.Item label="Junior" value="Junior" />
          <Picker.Item label="Senior" value="Senior" />
          <Picker.Item label="Graduate Student" value="Graduate Student" />
          <Picker.Item label="Faculty" value="Faculty" />
        </Picker>



        <TouchableOpacity onPress={this.update}>
          <Text style={ styles.button }>Update Profile</Text>
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
  }
});

module.exports = AccountSettings;
