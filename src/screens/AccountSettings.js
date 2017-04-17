import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, TextInput, Picker, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimplePicker from 'react-native-simple-picker';

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      name: this.props.user.name,
      year: this.props.user.year,
      birthday: moment(this.props.user.birthday).add(1, 'day').format("MMMM D, YYYY"),
      location: this.props.user.location,
      gender: this.props.user.gender,
      major: this.props.user.major,
      hometown: this.props.user.hometown
    };
    this.update = this.update.bind(this);
  }

  async update() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/update';
    //var url = 'http://localhost:5000/user/update';

    console.log(this.state.year);

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

    if(this.state.year == '') {
      this.setState({year: 'Click to choose year'});
    }

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={ styles.container }>

        <View style={styles.information}>
          <Text style={{marginTop: 15, marginLeft: 15}}>INFORMATION</Text>
          <Card containerStyle={{marginTop: 0, paddingTop: 0}}>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='person' size={20} />
              <View style={styles.text}>
                <Text>{this.state.username}</Text>
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='email' size={20} />
              <View style={styles.text}>
                <Text>{this.state.email}</Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.optional}>
          <Text style={{marginTop: 15, marginLeft: 15}}>OPTIONAL</Text>
          <Card containerStyle={{marginTop: 0, paddingTop: 0}}>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='dashboard' size={20} />
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
              <Icon color='#d3d3d3' name='home' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Location On Campus"
                  autoCorrect={false}
                  value={ this.state.location }
                  onChangeText={(text) => this.setState({location: text})}
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
                  {this.state.year}
              </Text>
              <SimplePicker
                 ref={'picker'}
                 options={data}
                 onSubmit={(option) => {
                   this.setState({
                     year: option,
                   });
                 }}
               />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='people' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Gender"
                  autoCorrect={false}
                  value={ this.state.gender }
                  onChangeText={(text) => this.setState({gender: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='school' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Major"
                  autoCorrect={false}
                  value={ this.state.major }
                  onChangeText={(text) => this.setState({major: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='home' size={20} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Hometown"
                  autoCorrect={false}
                  value={ this.state.hometown }
                  onChangeText={(text) => this.setState({hometown: text})}
                  style={ styles.input }
                  keyboardType='default' />
              </View>
            </View>
            <View style={styles.element}>
              <Icon color='#d3d3d3' name='today' size={20} />
              <View style={styles.dateContainer}>
                <Text style={{marginTop: 5, marginRight: 10}} >Birthday</Text>
                  <DatePicker
                    style={{width: 200}}
                    date={this.state.birthday}
                    mode="date"
                    placeholder="select date"
                    format="MMMM D, YYYY"
                    minDate={moment().subtract('90', 'years').format("MMMM D, YYYY")}
                    maxDate={moment().add(1, 'year').format("MMMM D, YYYY")}
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
                    onDateChange={(date) => {this.setState({birthday: date})}}
                    />
              </View>
            </View>
          </Card>
        </View>

        <View style={{marginTop: 20, marginBottom: 200}}>
          <TouchableOpacity onPress={this.update}>
            <Text style={styles.button}>Update Account Settings</Text>
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
  button: {
    width: Dimensions.get('window').width - 30,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

module.exports = AccountSettings;
