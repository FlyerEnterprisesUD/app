import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import SimplePicker from 'react-native-simple-picker';

export default class AccountSettings extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      name: '',
      year: 'Click to choose year!',
      birthday: '',
      location: '',
      gender: '',
      major: '',
      hometown: ''
    };
    this.update = this.update.bind(this);
    this.get = this.get.bind(this);
  }

  componentWillMount() {
    this.get();
    this.setState({username: this.props.user.username, email: this.props.user.email});
  }

  async get() {
    //var url = 'http://localhost:3000/user/getsettings';
    var url = 'https://flyerentapi.herokuapp.com/user/getsettings';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        return null;
      } else {
        this.setState({name: responseJson.response.settings.name, location: responseJson.response.settings.location, gender: responseJson.response.settings.gender, major: responseJson.response.settings.major, hometown: responseJson.response.settings.hometown, year: responseJson.response.settings.year, birthday: moment(responseJson.response.settings.birthday).add(1, 'days').format("MMMM D, YYYY")});
      }

    } catch (err) {
      console.error(err);
    }
  }

  async update() {
    var url = 'https://flyerentapi.herokuapp.com/user/updatesettings';
    //var url = 'http://localhost:3000/user/updatesettings';

    console.log(this.state.year);

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id,
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
        this.props.navigator.resetTo({id: 'Home', user: this.props.user});
      }

    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const data = [
      'First Year',
      'Second Year',
      'Junior',
      'Senior',
      '5th Year',
      'Graduate',
      'Faculty',
      'Other'
    ];

    return(
      <ScrollView style={styles.container}>

        <View>
          <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Information</Text>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.username}</Text>
              </View>
              <View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="envelope" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.email}</Text>
              </View>
              <View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Optional Information</Text>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Name'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'bookmark'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.name}
              onChangeText={(text) => this.setState({name: text})}
              ref={'name'}
              onSubmitEditing={(event) => {
                this.refs.location.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Location On Campus'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'home'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.location}
              onChangeText={(text) => this.setState({location: text})}
              ref={'location'}
              onSubmitEditing={(event) => {
                this.refs.gender.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Gender'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'users'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.gender}
              onChangeText={(text) => this.setState({gender: text})}
              ref={'gender'}
              onSubmitEditing={(event) => {
                this.refs.major.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Major'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'graduation-cap'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.major}
              onChangeText={(text) => this.setState({major: text})}
              ref={'major'}
              onSubmitEditing={(event) => {
                this.refs.hometown.focus();
              }}
            />
          </View>
          <View style={{marginTop: 4, marginLeft: 16, marginRight: 16, shadowColor: '#a3a3a3', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, borderColor: 'rgba(163, 163, 163, 0.5)', borderWidth: 1}}>
            <Fumi
              label={'Hometown'}
              labelStyle={{ color: '#a3a3a3', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}
              inputStyle={{ color: '#2e2e2e', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}
              style={{}}
              iconClass={Icon}
              iconName={'home'}
              iconColor={'#CC0F40'}
              iconSize={15}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              value={this.state.hometown}
              onChangeText={(text) => this.setState({hometown: text})}
              ref={'hometown'}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="calendar" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <Text onPress={() => { this.refs.picker.show();}} style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16, color: '#414141'}}>{this.state.year}</Text>
                <SimplePicker ref={'picker'} options={data} onSubmit={(option) => { this.setState({ year: option }); }} />
              </View>
              <View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="birthday-cake" size={16} color="#CC0F40" style={{marginTop: 6}} />
                <DatePicker
                  style={{width: 200}}
                  date={this.state.birthday}
                  mode="date"
                  placeholder="Enter Your Birthday"
                  format="MMMM D, YYYY"
                  minDate={moment().subtract('90', 'years').format("MMMM D, YYYY")}
                  maxDate={moment().add(1, 'year').format("MMMM D, YYYY")}
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
                      marginLeft: -80
                    },
                    dateText: {
                      fontFamily: 'avenir', fontWeight: 'bold',
                      fontSize: 16,
                      color: '#414141',
                      marginTop: 4
                    },
                    placeholderText: {
                      fontFamily: 'avenir', fontWeight: 'bold',
                      fontSize: 16,
                      color: '#414141',
                      marginTop: 4,
                      marginLeft: 55
                    }
                  }}
                  onDateChange={(date) => {this.setState({birthday: date})}}
                  />
              </View>
              <View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 20}}>
            <TouchableOpacity onPress={this.update}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16}}>Update Information</Text>
              </View>
            </TouchableOpacity>
          </View>
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
