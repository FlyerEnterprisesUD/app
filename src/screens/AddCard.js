import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Picker, Switch, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { Card, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      division: '',
      total: ''
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    //var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/addcard';
    var url = 'http://localhost:5000/auth/addcard';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          name: this.state.name,
          division: this.state.division,
          total: this.state.total
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
    const divisions = [
      'The Blend',
      'The Galley',
      'The Blend Express',
      'ArtStreet Cafe',
      'The Jury Box',
      'Stuarts Landing',
      'Moving And Storage',
      'The CHILL'
    ];

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={ styles.container }>

        <View style={styles.information}>
          <Text style={{marginTop: 15, marginLeft: 15}}>INFORMATION</Text>
          <Card containerStyle={{marginTop: 0, paddingTop: 0}}>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='person' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Name"
                  autoCorrect={false}
                  value={ this.state.name }
                  onChangeText={(text) => this.setState({name: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='grade' size={20} style={{justifyContent: 'center'}}/>
              <View style={styles.text}>
                <Text
                  onPress={() => {
                    this.refs.picker.show();
                  }}
                >
                    {this.state.division}
                </Text>
                <SimplePicker
                   ref={'picker'}
                   options={divisions}
                   onSubmit={(option) => {
                     this.setState({
                       division: option,
                     });
                   }}
                 />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='person' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Total"
                  autoCorrect={false}
                  value={ this.state.total }
                  onChangeText={(text) => this.setState({total: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={ this.submit }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Submit</Text>
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
    backgroundColor: '#fafafa',
    marginTop: 65
  },
  element: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15
  },
  text: {
    marginLeft: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    flex: 2
  },
  inputContainer: {
    marginLeft: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    flex: 2
  },
  input: {
    height: 15
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    flex: 2
  },
  buttons: {
    marginLeft: 75,
    marginRight: 75,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer:{
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily:'LabradorA-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default AddCard
