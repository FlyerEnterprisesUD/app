import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, AsyncStorage, ScrollView, Switch, AlertIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PushSetting from '../components/PushSetting';
import Display from 'react-native-display';

export default class Settings extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
    this.navigateToChangePassword = this.navigateToChangePassword.bind(this);
    this.navigateToAccountSettings = this.navigateToAccountSettings.bind(this);
    this.navigateToPrivacyPolicy = this.navigateToPrivacyPolicy.bind(this);
    this.getPushSettings = this.getPushSettings.bind(this);
    this.navigateToFeedback = this.navigateToFeedback.bind(this);
    this.touch = this.touch.bind(this);
    this.setTouch = this.setTouch.bind(this);

    this.state = {
      divisions: [],
      loading: true,
      touch: false
    };
  }

  logout() {
    AsyncStorage.setItem('token', '').done();
    this.props.nav.replace({id: 'Login'});
  }

  componentWillMount() {
    if(this.props.user.username != 'Guest'){
      this.setState({loading: true});
      this.touch();
      this.getPushSettings();
    }
  }

  componentWillUnmount(){
    if(this.state.touch == false) {
      AsyncStorage.setItem('touchid', 'false').done();
    } else {
      AsyncStorage.setItem('touchid', 'true').done();
    }
  }

  async touch() {
    try {
      const touchid = await AsyncStorage.getItem('touchid', touchid);
      if (touchid !== null){
        if(touchid == 'true') {
          this.setState({touch: true});
        } else {
          this.setState({touch: false});
        }

      } else {
        console.log("Touch ID");
      }
    } catch (error) {
      console.log(error);
    }
  }

  setTouch(state) {
    AsyncStorage.setItem('touchid', state).done()
  }


  async getPushSettings() {
    var url = 'https://flyerentapi.herokuapp.com/user/getpushsettings';
    //var url = 'http://localhost:3000/user/getpushsettings';

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

      this.setState({ divisions: responseJson.response.settings, loading: false });

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

  navigateToPrivacyPolicy() {
    this.props.navigator.push({id: 'Privacy Policy', user: this.props.user});
  }

  navigateToFeedback() {
    this.props.navigator.push({id: 'Feedback', user: this.props.user});
  }

  //TODO update push setting on change rather than on componentWillUnmount
  render() {
    if(this.props.user.username == 'Guest') {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Legal</Text>
            <TouchableOpacity onPress={this.navigateToPrivacyPolicy}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="gavel" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Privacy Policy</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Support</Text>
            <TouchableOpacity onPress={this.navigateToFeedback}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="comments" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Feedback</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10}}>
            <TouchableOpacity onPress={this.logout}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    } else {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Information</Text>
            <TouchableOpacity onPress={this.navigateToAccountSettings}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Account Settings</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToChangePassword}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="unlock-alt" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Change Password</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon name="lock" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Use TouchID?</Text>
                </View>
                <View>
                  <Switch onValueChange={(value) => this.setState({touch: value})} value={this.state.touch} onTintColor={'#CC0F40'} />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Push Notifications</Text>

            <Display enable={!this.state.loading}>
            <View>
            {
              this.state.divisions.map((l, i) => (
                <PushSetting key={i} division={l} user={this.props.user} />
              ))
            }
            </View>
            </Display>

          </View>

          <View>
            <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Legal</Text>
            <TouchableOpacity onPress={this.navigateToPrivacyPolicy}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="gavel" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Privacy Policy</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Support</Text>
            <TouchableOpacity onPress={this.navigateToFeedback}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="comments" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Feedback</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10, marginBottom: 20}}>
            <TouchableOpacity onPress={this.logout}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    }
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
    marginTop: 10,
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
