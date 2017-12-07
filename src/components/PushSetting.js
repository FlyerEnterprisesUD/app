import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PushSetting extends Component {
  constructor(props) {
    super(props);
    this.updatePushSettings = this.updatePushSettings.bind(this);

    this.state = {
      status: false
    }
  }

  componentWillMount() {
    if(this.props.division.pushsettings[0].status == 1) {
      this.setState({status: true});
    } else {
      this.setState({status: false});
    }

  }

  async updatePushSettings(status) {
    //console.log(status)

    var s;
    if(status == true) {
      this.setState({status: true});
      s = 1;
    } else {
      this.setState({status: false});
      s = 0;
    }

    var url = 'https://flyerentapi.herokuapp.com/user/updatepushsettings';
    //var url = 'http://localhost:3000/user/updatepushsettings';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id,
          divisionId: this.props.division.id,
          status: s
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        return null;
      } else {
        AlertIOS.alert(
         'Error',
         'Please try again later'
        );
        return null;
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <View style={styles.section}>
        <View style={styles.item}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon name="cutlery" size={16} color="#CC0F40" style={{marginTop: 6}} />
            <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>{this.props.division.name}</Text>
          </View>
          <View>
            <Switch onValueChange={(value) => this.updatePushSettings(value)} value={this.state.status} onTintColor={'#CC0F40'} />
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
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
  }
});

export default PushSetting;
