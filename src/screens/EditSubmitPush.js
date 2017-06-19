import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Picker, Switch, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import SimplePicker from 'react-native-simple-picker';
import { Card, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class EditSubmitPush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.push.title,
      division: this.props.push.division,
      submitter: this.props.push.submitter,
      body: this.props.push.body,
      time: moment(this.props.push.time).format("YYYY-MM-DD HH:mm"),
      ready: this.props.push.ready
    };
    this.approve = this.approve.bind(this);
    this.deny = this.deny.bind(this);
  }

  async approve() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/approvepush';
    //var url = 'http://localhost:5000/auth/approvepush';

    var time = '';
    if(this.state.ready == true) {
      time = 'now';
    } else {
      time = this.state.time;
    }

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          id: this.props.push.id,
          title: this.state.title,
          division: this.state.division,
          body: this.state.body,
          time: moment(this.state.time).add('4', 'hours').format("YYYY-MM-DD HH:mm")
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.replace({id: 'Approve Push', user: this.props.user, token: this.props.token});
      }


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async deny() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/denypush';
    //var url = 'http://localhost:5000/auth/denypush';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          id: this.props.push.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.replace({id: 'Approve Push', user: this.props.user, token: this.props.token});
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
                  placeholder="Title"
                  autoCorrect={false}
                  value={ this.state.title }
                  onChangeText={(text) => this.setState({title: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='email' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Body"
                  autoCorrect={false}
                  multiline = {true}
                  numberOfLines = {4}
                  value={ this.state.body }
                  onChangeText={(text) => this.setState({body: text})}
                  style={{height: 60}}
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
          </Card>
        </View>

        <View style={styles.time}>
          <Text style={{marginTop: 15, marginLeft: 15}}>TIME</Text>
          <Card containerStyle={{marginTop: 0, paddingTop: 0}}>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='person' size={20} />
              <View style={styles.dateContainer}>
                <Text>Now</Text>
                <Switch
                  onValueChange={(value) => this.setState({ready: value})}
                  style={{marginBottom: 10}}
                  value={this.state.ready} />

                <Text> | Start Date </Text>

                <DatePicker
                  style={{width: 140}}
                  date={this.state.time}
                  mode="datetime"
                  placeholder="select date"
                  format="YYYY-MM-DD hh:mm"
                  minDate={moment().format("YYYY-MM-DD")}
                  maxDate={moment().add(1, 'year').format("YYYY-MM-DD")}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateInput: {
                      height: 30
                    },
                    dateIcon: {
                      height: 0,
                      width: 0
                    },
                    dateTouchBody: {
                      height: 30
                    }
                  }}
                  onDateChange={(date) => {this.setState({time: date})}}
                  />
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={ this.approve }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Approve</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.deny }>
            <View style={styles.buttonContainer}>
                <Text style={ styles.button }>Deny</Text>
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
    justifyContent: 'space-between'
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
    color: '#FFFFFF',
    backgroundColor: 'rgba(220,220,220,0)'
  }
});

export default EditSubmitPush
