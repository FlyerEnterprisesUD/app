import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AlertIOS, Dimensions, Picker, Switch, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import SimplePicker from 'react-native-simple-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Display from 'react-native-display';

class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: 'Click to choose product type',
      description: ''
    };

    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);

  }

  componentWillMount() {
    this.setState({name: this.props.product.name, description: this.props.product.description});
    if(this.props.product.type == 'cutlery') {
      this.setState({type: 'Food'});
    } else {
      this.setState({type: 'Drink'});
    }
  }

  async submit() {
    var url = 'https://flyerentapi.herokuapp.com/menu/updateproduct';
    //var url = 'http://localhost:3000/menu/updategroup';

    if(this.state.name == '') {
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

    var type;
    if(this.state.type == 'Drink') {
      type = 'coffee'
    } else {
      type = 'cutlery'
    }

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.props.product.id,
          name: this.state.name,
          type: type,
          description: this.state.description,
          pointValue: 1,
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
    var url = 'https://flyerentapi.herokuapp.com/menu/deleteproduct';
    //var url = 'http://localhost:3000/menu/updategroup';

    if(this.state.name == '') {
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
          id: this.props.product.id,
          divisionId: this.props.division.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.push({id:'Product Menu', user: this.props.user, division: this.props.division, token: this.props.token });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }

  }


  render() {
    const types = [
      'Food',
      'Drink'
    ];

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={ styles.container }>

        <View>
          <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Product</Text>
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
                this.submit()
              }}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text onPress={() => { this.refs.picker.show();}} style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.type}</Text>
                <SimplePicker ref={'picker'} options={types} onSubmit={(option) => { this.setState({ type: option }); }} />
              </View>
              <View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <TextInput
              style={{height: 300, fontFamily: 'avenir', fontWeight: 'bold', fontSize: 16}}
              onChangeText={(text) => this.setState({description: text})}
              value={this.state.description}
              multiline={true}
            />
          </View>

          <View style={{marginTop: 10}}>
            <TouchableOpacity onPress={this.submit}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Update Product</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10, marginBottom: 120}}>
            <TouchableOpacity onPress={this.delete}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Delete Product</Text>
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

export default EditProduct
