import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AlertIOS, Dimensions, Picker, Switch, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import SimplePicker from 'react-native-simple-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Display from 'react-native-display';

class EditAddon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: ''
    };

    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    this.setState({name: this.props.addon.name, price: '' + this.props.addon.price});
  }

  async submit() {
    var url = 'https://flyerentapi.herokuapp.com/menu/updateaddon';
    //var url = 'http://localhost:3000/menu/creategroup';

    if(this.state.name == '' || this.state.price == '') {
      AlertIOS.alert(
        'Error',
        'Please fill out all fields',
        [{
          text: 'Dismiss',
          onPress: null,
        }]
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
          id: this.props.addon.id,
          name: this.state.name,
          price: this.state.price,
          divisionId: this.props.division.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.pop();
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }

  }

  async delete() {
    var url = 'https://flyerentapi.herokuapp.com/menu/deleteaddon';
    //var url = 'http://localhost:3000/menu/updategroup';

    if(this.state.name == '' || this.state.price == '') {
      AlertIOS.alert(
        'Error',
        'Please fill out all fields',
        [{
          text: 'Dismiss',
          onPress: null,
        }]
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
          id: this.props.addon.id,
          divisionId: this.props.division.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.pop();
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }

  }

  render() {

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={ styles.container }>

      <View>
        <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>{this.props.addon.name}</Text>
        <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
          <Fumi
            label={'Name'}
            labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
            inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
            style={{}}
            iconClass={Icon}
            iconName={'bookmark'}
            iconColor={'#CC0F40'}
            iconSize={14}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'default'}
            value={this.state.name}
            onChangeText={(text) => this.setState({name: text})}
            ref={'name'}
            onSubmitEditing={(event) => {
              this.refs.price.focus()
            }}
          />
        </View>

        <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
          <Fumi
            label={'Price'}
            labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
            inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
            style={{}}
            iconClass={Icon}
            iconName={'bookmark'}
            iconColor={'#CC0F40'}
            iconSize={14}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'default'}
            value={this.state.price}
            onChangeText={(text) => this.setState({price: text})}
            ref={'price'}
            onSubmitEditing={(event) => {
              this.submit()
            }}
          />
        </View>

          <View style={{marginTop: 10}}>
            <TouchableOpacity onPress={this.submit}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Update Addon</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10, marginBottom: 120}}>
            <TouchableOpacity onPress={this.delete}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Delete Addon</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 65
  },
  section: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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

export default EditAddon
