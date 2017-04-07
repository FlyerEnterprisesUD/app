import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput, Picker, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      name: this.props.user.name,
      year: this.props.user.year,
      birthday: moment().format("YYYY-MM-DD"),
      location: this.props.location,
      gender: this.props.gender,
      major: this.props.major,
      hometown: this.props.hometown
    };
    this.update = this.update.bind(this);
  }

  async update() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/update';
    //var url = 'http://localhost:5000/user/update';

    this.props.user.year = this.state.year;

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
          year: this.state.year,
          birthday: this.state.birthday,
          location: this.state.location,
          gender: this.state.gender,
          major: this.state.major,
          hometown: this.state.hometown
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
      <ScrollView style={ styles.container }>

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
          <Picker.Item label="First Year" value="First Year" />
          <Picker.Item label="Sophomore" value="Sophomore" />
          <Picker.Item label="Junior" value="Junior" />
          <Picker.Item label="Senior" value="Senior" />
          <Picker.Item label="Graduate Student" value="Graduate Student" />
          <Picker.Item label="Faculty" value="Faculty" />
        </Picker>

        <DatePicker
          style={{width: 200}}
          date={this.state.birthday}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={moment().subtract('90', 'years').format("YYYY-MM-DD")}
          maxDate={moment().add(1, 'year').format("YYYY-MM-DD")}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({birthday: date})}}
          />

        <TextInput
          placeholder="Location on Campus"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.location }
          onChangeText={(text) => this.setState({location: text})}
          style={ styles.input }
          keyboardType='default' />

        <TextInput
          placeholder="Gender"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.gender }
          onChangeText={(text) => this.setState({gender: text})}
          style={ styles.input }
          keyboardType='default' />

        <TextInput
          placeholder="Major"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.mojor }
          onChangeText={(text) => this.setState({major: text})}
          style={ styles.input }
          keyboardType='default' />

        <TextInput
          placeholder="Hometown"
          autoCapitalize="none"
          autoCorrect={false}
          value={ this.state.hometown }
          onChangeText={(text) => this.setState({hometown: text})}
          style={ styles.input }
          keyboardType='default' />



        <TouchableOpacity onPress={this.update}>
          <Text style={ styles.button }>Update Profile</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginBottom: 200}} />

      </ScrollView>
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
