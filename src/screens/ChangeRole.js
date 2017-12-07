import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { Fumi } from 'react-native-textinput-effects';
import Display from 'react-native-display';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChangeRole extends Component {
  constructor() {
    super();
    this.state = {
      role: '',
      email: '',
      username: ''
    };
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.setState({role: this.props.newUser.role, username: this.props.newUser.username, email: this.props.newUser.email});
  }

  async update() {
    var url = 'https://flyerentapi.herokuapp.com/user/update';
    //var url = 'http://localhost:3000/user/update';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          id: this.props.newUser.id,
          role: this.state.role,
          username: this.state.username,
          email: this.state.email
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id: 'Home', user: this.props.user, token: this.props.token});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const roles = [
      'User',
      'Submitter',
      'Approver',
      'Editor',
      'Admin'
    ];

    return(
      <ScrollView style={styles.container}>

        <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Information</Text>
        <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
          <Fumi
            label={'Username'}
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
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            ref={'username'}
            onSubmitEditing={(event) => {

            }}
          />
        </View>

        <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
          <Fumi
            label={'Email'}
            labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
            inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
            style={{}}
            iconClass={Icon}
            iconName={'envelope'}
            iconColor={'#CC0F40'}
            iconSize={15}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'default'}
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            ref={'email'}
            onSubmitEditing={(event) => {

            }}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text onPress={() => { this.refs.picker.show();}} style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.role}</Text>
              <SimplePicker ref={'picker'} options={roles} onSubmit={(option) => { this.setState({ role: option }); }} />
            </View>
            <View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <TouchableOpacity onPress={this.update}>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Update</Text>
            </View>
          </TouchableOpacity>
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

export default ChangeRole;
