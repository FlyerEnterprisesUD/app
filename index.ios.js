import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import App from './src/App';
import Login from './src/Login';
import Create from './src/Create';

class app extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const { toggleSideMenu } = false;
    switch(route.id) {
      case 'Login':
        return(<Login navigator={ navigator } />);
      case 'Create':
        return(<Create navigator={ navigator } />);
      case 'App':
        return(<App user={ route.user } nav={ navigator } />);
    }
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
