import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AlertIOS, Dimensions, Picker, Switch, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import SimplePicker from 'react-native-simple-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Display from 'react-native-display';

class SubmitPush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      division: 'Click to choose division',
      submitter: '',
      body: '',
      startTime: moment().format("YYYY-MM-DD HH:mm"),
      ready: true,
      divisionId: ''
    };
    this.submit = this.submit.bind(this);
    this.getId = this.getId.bind(this);
  }

  async getId() {
    //var url = 'http://localhost:3000/division/getid';
    var url = 'https://flyerentapi.herokuapp.com/division/getid';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.division,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.submit(responseJson.response.division.id);
        this.props.navigator.resetTo({id: 'Home', user: this.props.user, token: this.props.token});
        return null;
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async submit(divisionId) {
    var url = 'https://flyerentapi.herokuapp.com/notification/create';
    //var url = 'http://localhost:3000/notification/create';

    if(this.state.division == 'Click to choose division') {
      AlertIOS.alert(
        'Flyer Enterprises',
        'Please choose a division!',
        [{
          text: 'Dismiss',
          onPress: null,
        }]
      );
      return null;
    }

    if(this.state.name == '' || this.state.body == '') {
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

    var user = '';

    if(this.props.user.name && this.props.user.name.trim() != "") {
      user = this.props.user.name;
    } else {
      user = this.props.user.username;
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
          name: this.state.name,
          divisionId: divisionId,
          body: this.state.body,
          submitter: user,
          ready: this.state.ready,
          startTime: moment(this.state.startTime).subtract(4, 'hours').format("YYYY-MM-DD HH:mm")
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
      'The CHILL'
    ];

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={ styles.container }>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Information</Text>
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

              }}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text onPress={() => { this.refs.picker.show();}} style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.division}</Text>
                <SimplePicker ref={'picker'} options={divisions} onSubmit={(option) => { this.setState({ division: option }); }} />
              </View>
              <View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <TextInput
              style={{height: 300, fontFamily: 'avenir', fontWeight: 'bold', fontSize: 16}}
              onChangeText={(text) => this.setState({body: text})}
              value={this.state.body}
              multiline={true}
            />
          </View>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Time</Text>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="calendar" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text style={{marginTop: 4, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Now?</Text>
              </View>
              <View>
                <Switch onValueChange={(value) => this.setState({ready: value})} value={this.state.ready} onTintColor={'#CC0F40'} />
              </View>
            </View>
          </View>
          <Display enable={!this.state.ready}>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Start Time</Text>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="calendar" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <DatePicker
                  style={{width: 200}}
                  date={this.state.startTime}
                  mode="datetime"
                  placeholder="select date"
                  format="YYYY-MM-DD HH:mm"
                  minDate={moment().format("YYYY-MM-DD HH:mm")}
                  maxDate={moment().add(1, 'year').format("YYYY-MM-DD HH:mm")}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      height: 30,
                      borderWidth: 0
                    },
                    dateTouchBody: {
                      height: 30,
                      marginLeft: -40
                    },
                    dateText: {
                      fontFamily: 'avenir', fontWeight: 'bold',
                      fontSize: 16,
                      color: '#414141',
                      marginTop: 4
                    }
                  }}
                  onDateChange={(date) => {this.setState({startTime: date})}}
                  />
              </View>
              <View>
              </View>
            </View>
          </View>
          </Display>

          <View style={{marginTop: 10, marginBottom: 120}}>
            <TouchableOpacity onPress={this.getId}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Submit</Text>
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

export default SubmitPush
