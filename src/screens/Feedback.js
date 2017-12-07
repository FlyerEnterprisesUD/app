import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, AlertIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Display from 'react-native-display';

export default class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      guest: true,
      name: ''
    };

    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    if(this.props.user.username == 'Guest') {
      this.setState({guest: true});
    } else {
      this.setState({guest: false});
    }
  }

  async submit() {
    var url = 'https://flyerentapi.herokuapp.com/user/createresponses';
    //var url = 'http://localhost:3000/user/createresponse';

    var name;
    if(this.props.user.username == 'Guest') {
      name = this.state.name;
    } else {
      name = this.props.user.username
    }

    if(this.state.body == '') {
      AlertIOS.alert(
       'Error',
       'Please fill out all fields'
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
          username: name,
          body: this.state.message
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        AlertIOS.alert(
         'Thanks!',
         'Your feedback has been recorded'
        );
        this.props.navigator.resetTo({id: 'Home', user: this.props.user});
        return null;
      } else {
        AlertIOS.alert(
         'Error',
         'Please try again later'
        );
        return null;
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
          <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Information</Text>
          <Display enable={!this.state.guest}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.props.user.username}</Text>
                </View>
                <View>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon name="envelope" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.props.user.email}</Text>
                </View>
                <View>
                </View>
              </View>
            </View>
          </Display>
          <Display enable={this.state.guest}>
            <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
              <Fumi
                label={'Name'}
                labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
                inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
                style={{}}
                iconClass={Icon}
                iconName={'user'}
                iconColor={'#CC0F40'}
                iconSize={15}
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'default'}
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
                ref={'name'}
                onSubmitEditing={(event) => {
                  this.refs.body.focus();
                }}
              />
            </View>
          </Display>
          <View style={styles.section}>
            <TextInput
              style={{height: 300, fontFamily: 'avenir', fontWeight: 'bold', fontSize: 16}}
              onChangeText={(text) => this.setState({message: text})}
              value={this.state.message}
              multiline={true}
              ref={'body'}
            />
          </View>
        </View>
        <View style={{marginTop: 10, marginBottom: 300}}>
          <TouchableOpacity onPress={this.submit}>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16}}>Submit</Text>
            </View>
          </TouchableOpacity>
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
