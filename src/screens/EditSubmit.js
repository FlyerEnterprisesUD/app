import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Picker, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment-timezone';

class EditSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.promotion.title,
      division: this.props.promotion.division,
      submitter: this.props.promotion.submitter,
      body: this.props.promotion.body,
      time: moment(this.props.promotion.time).format("YYYY-MM-DD HH:mm"),
      ready: this.props.promotion.ready,
      end: moment(this.props.promotion.end).format("YYYY-MM-DD HH:mm")
    };
    this.approve = this.approve.bind(this);
    this.deny = this.deny.bind(this);
  }

  async approve() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/approve';
    //var url = 'http://localhost:5000/auth/approve';

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
          id: this.props.promotion.id,
          title: this.state.title,
          division: this.state.division,
          body: this.state.body,
          time: moment(this.state.time).format("YYYY-MM-DD HH:mm"),
          end: moment(this.state.end).format("YYYY-MM-DD HH:mm")
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.replace({id: 'Approve', user: this.props.user, token: this.props.token});
      }


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async deny() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/deny';
    //var url = 'http://localhost:5000/auth/deny';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          id: this.props.promotion.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.replace({id: 'Approve', user: this.props.user, token: this.props.token});
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

        <Text>Division: </Text>
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

        <Text>Division: {this.state.submitter}</Text>

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
            onValueChange={(value) => this.setState({ready: value})}
            style={{marginBottom: 10}}
            value={this.state.ready} />

          <DatePicker
            style={{width: 200}}
            date={this.state.time}
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
            onDateChange={(date) => {this.setState({time: date})}}
            />


            <DatePicker
              style={{width: 200}}
              date={this.state.end}
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
              onDateChange={(date) => {this.setState({end: date})}}
              />


        <View style={styles.buttons}>
        <TouchableOpacity onPress={this.approve}>
          <Text style={ styles.button }>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.deny}>
          <Text style={ styles.button }>Deny</Text>
        </TouchableOpacity>
        </View>

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
    width: Dimensions.get('window').width / 2 - 40,
    padding: 10,
    backgroundColor: '#CC0F40',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  },
  buttons: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});

export default EditSubmit
