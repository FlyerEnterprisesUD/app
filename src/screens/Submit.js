import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Picker, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      division: 'The CHILL',
      submitter: '',
      body: '',
      date: moment().format("YYYY-MM-DD HH:mm"),
      now: true,
      time: ''
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/submit';
    //var url = 'http://localhost:5000/auth/submit';

    var user = '';
    var time = '';

    if(this.props.user.name != null || this.props.user.name.trim() != "") {
      user = this.props.user.name;
    } else {
      user = this.props.user.username;
    }

    if(this.state.now == true) {
      time = 'now';
    } else {
      time = moment(this.state.date).add(4, "hours").format("YYYY-MM-DD HH:mm");
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
          title: this.state.title,
          division: this.state.division,
          body: this.state.body,
          submitter: user,
          time: time,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.replace({id: 'Home', user: this.props.user, token: this.props.token});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Title: </Text>
        <TextInput
          placeholder="Title"
          autoCorrect={false}
          value={ this.state.title }
          onChangeText={(text) => this.setState({title: text})}
          style={ styles.input }
          keyboardType='default' />

        <Picker
          selectedValue={this.state.division}
          onValueChange={(text) => this.setState({division: text})}>
          <Picker.Item label="The CHILL" value="The CHILL" />
          <Picker.Item label="The Blend" value="The Blend" />
          <Picker.Item label="The Blend Express" value="The Blend Express" />
          <Picker.Item label="The Jury Box" value="The Jury Box" />
          <Picker.Item label="ArtStreet Cafe" value="ArtStreet Cafe" />
          <Picker.Item label="The Galley" value="The Galley" />
          <Picker.Item label="Stuarts Landing" value="Stuarts Landing" />
          <Picker.Item label="Moving and Storage" value="Moving and Storage" />
        </Picker>

        <Text>Body: </Text>
        <TextInput
          placeholder="Body"
          autoCorrect={false}
          value={ this.state.body }
          onChangeText={(text) => this.setState({body: text})}
          style={ styles.input }
          keyboardType='default' />

        <Text>Now: </Text>
        <Switch
          onValueChange={(value) => this.setState({now: value})}
          style={{marginBottom: 10}}
          value={this.state.now} />

        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD HH:mm"
          minDate={moment().format("YYYY-MM-DD")}
          maxDate={moment().add(1, 'year').format("YYYY-MM-DD")}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
          />

        <TouchableOpacity onPress={this.submit}>
          <Text style={ styles.button }>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  },
  input: {
    height: 35,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 4,
    alignItems: 'center'
  },
  button: {
    width: Dimensions.get('window').width - 60,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

export default Submit
