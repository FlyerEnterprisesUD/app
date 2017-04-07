import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, AsyncStorage, ScrollView, Switch } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.navigateToChangePassword = this.navigateToChangePassword.bind(this);
    this.navigateToAccountSettings = this.navigateToAccountSettings.bind(this);
    this.getPushSettings = this.getPushSettings.bind(this);
    this.updatePushSettings = this.updatePushSettings.bind(this);

    this.state = {
      chill: false,
      galley: false,
      artstreet: false,
      stus: false,
      blend: false,
      blendexpress: false,
      jurybox: false
    };
  }

  logout() {
    AsyncStorage.setItem('token', '').done();
    this.props.nav.replace({id: 'Login'});
  }

  componentWillMount() {
    this.getPushSettings();
  }

  async getPushSettings() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/getpushsettings';
    //var url = 'http://localhost:5000/user/getpushsettings';

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

      this.setState({ chill: responseJson.response.settings.chill });
      this.setState({ galley: responseJson.response.settings.galley });
      this.setState({ artstreet: responseJson.response.settings.artstreet });
      this.setState({ stus: responseJson.response.settings.stus });
      this.setState({ blend: responseJson.response.settings.blend });
      this.setState({ blendexpress: responseJson.response.settings.blendexpress });
      this.setState({ jurybox: responseJson.response.settings.jurybox });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async updatePushSettings() {
    //var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/updatepushsettings';
    var url = 'http://localhost:5000/user/updatepushsettings';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id,
          chill: this.state.chill,
          galley: this.state.galley,
          artstreet: this.state.artstreet,
          stus: this.state.stus,
          blend: this.state.blend,
          blendexpress: this.state.blendexpress,
          jurybox: this.state.jurybox
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

  navigateToChangePassword() {
    this.props.navigator.push({id: 'Change Password', user: this.props.user});
  }

  navigateToAccountSettings() {
    this.props.navigator.push({id: 'Account Settings', user: this.props.user});
  }

  render() {
    if(this.props.user.username != "Guest"){
      return(
        <ScrollView style={ styles.container }>

          <Text style={{marginTop: 10}}>Profile</Text>
          <List containerStyle={{marginTop:1}}>
            <ListItem
              onPress={this.navigateToAccountSettings}
              key='0'
              title={'Account Settings'}
            />

            <ListItem
              onPress={this.navigateToChangePassword}
              key='1'
              title={'Change Password'}
            />
          </List>

          <Text style={{marginTop: 10}}>Push Notifications</Text>
          <View>
            <Text>The CHILL</Text>
            <Switch
              onValueChange={(value) => this.setState({chill: value})}
              style={{marginBottom: 10}}
              value={this.state.chill} />
          </View>

          <View>
            <Text>The Galley</Text>
            <Switch
              onValueChange={(value) => this.setState({galley: value})}
              style={{marginBottom: 10}}
              value={this.state.galley} />
          </View>

          <View>
            <Text>ArtStreet Cafe</Text>
            <Switch
              onValueChange={(value) => this.setState({artstreet: value})}
              style={{marginBottom: 10}}
              value={this.state.artstreet} />
          </View>

          <View>
            <Text>Stuarts Landing</Text>
            <Switch
              onValueChange={(value) => this.setState({stus: value})}
              style={{marginBottom: 10}}
              value={this.state.stus} />
          </View>

          <View>
            <Text>The Blend</Text>
            <Switch
              onValueChange={(value) => this.setState({blend: value})}
              style={{marginBottom: 10}}
              value={this.state.blend} />
          </View>

          <View>
            <Text>The Blend Express</Text>
            <Switch
              onValueChange={(value) => this.setState({blendexpress: value})}
              style={{marginBottom: 10}}
              value={this.state.blendexpress} />
          </View>

          <View>
            <Text>The Jury Box</Text>
            <Switch
              onValueChange={(value) => this.setState({jurybox: value})}
              style={{marginBottom: 10}}
              value={this.state.jurybox} />
          </View>

          <TouchableOpacity onPress={ this.updatePushSettings }>
            <Text style={ styles.button }>Update Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ this.logout }>
            <Text style={ styles.button }>Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      );
    } else {
      return(
        <View style={ styles.container }>

          <TouchableOpacity onPress={ this.logout }>
            <Text style={ styles.button }>Logout</Text>
          </TouchableOpacity>

        </View>
      );
    }

  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
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
    alignItems: 'center',
    marginTop: 20
  }
});

module.exports = Settings;
