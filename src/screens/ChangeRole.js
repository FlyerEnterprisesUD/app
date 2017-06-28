import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import SimplePicker from 'react-native-simple-picker';

class ChangeRole extends Component {
  constructor() {
    super();
    this.state = {
      role: ''
    };
    this.changeRole = this.changeRole.bind(this);
  }

  componentWillMount() {
    this.setState({role: this.props.newUser.role});
  }

  async changeRole() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/changerole';
    //var url = 'http://localhost:5000/auth/changerole';

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
          role: this.state.role
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
      'user',
      'submitter',
      'approver',
      'admin'
    ];

    return(
      <View style={styles.container}>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 26, textAlign: 'center'}}>{this.props.newUser.username}</Text>
          <View style={styles.text}>
            <Text
              onPress={() => {
                this.refs.picker.show();
              }}
            >
                {this.state.role}
            </Text>
            <SimplePicker
               ref={'picker'}
               options={roles}
               onSubmit={(option) => {
                 this.setState({
                   role: option,
                 });
               }}
             />
          </View>
        </Card>

        <TouchableOpacity onPress={ this.changeRole }>
          <Text style={ styles.button }>Change Role</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 65
  },
  text: {
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: Dimensions.get('window').width - 30,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10
  }
});

export default ChangeRole;
