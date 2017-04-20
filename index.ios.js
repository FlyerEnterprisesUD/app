import React, { Component } from 'react';
import { AppRegistry, Navigator, PushNotificationIOS, AlertIOS } from 'react-native';

import App from './src/App';
import Login from './src/Login';
import Create from './src/Create';
import Email from './src/Email';

class app extends Component {
  constructor(){
    super();
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const { toggleSideMenu } = false;
    switch(route.id) {
      case 'Login':
        return(<Login navigator={ navigator } />);
      case 'Create':
        return(<Create navigator={ navigator } />);
      case 'Email':
        return(<Email navigator={ navigator } />);
      case 'App':
        return(<App user={ route.user } token={ route.token } nav={ navigator } />);
    }
  }

  componentWillMount(){
    PushNotificationIOS.addEventListener('register', this._onRegistered);
    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
    // you could check the app state to respond differently to push notifications depending on if the app is running in the background or is currently active.

    PushNotificationIOS.requestPermissions();
  }

  _onRegistered(deviceToken) {
    /*AlertIOS.alert(
      'Registered For Remote Push',
      `Device Token: ${deviceToken}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );*/
    console.log(deviceToken);
  }

  _onRegistrationError(error) {
    /*AlertIOS.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );*/
    console.log(error);
  }

  _onRemoteNotification(notification) {
    AlertIOS.alert(
      'Push Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  _onLocalNotification(notification){
    AlertIOS.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  render() {
    return(
      <Navigator
        ref="main-navigator"
        initialRoute = {{ id: 'Login'}}
        renderScene = { this.navigatorRenderScene } />
    );
  }
}

AppRegistry.registerComponent('app', () => app);
