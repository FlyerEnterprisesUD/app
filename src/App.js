import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator } from 'react-native'
import { List, ListItem, SideMenu } from 'react-native-elements';
import navigationBar from './components/NavBar';

import Home from './screens/Home';
import Chill from './screens/Chill';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navigateToHome() {
    this.refs.navigator.push({id:'Home'});
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navigateToChill() {
    this.refs.navigator.push({id:'The Chill'});
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const { toggleSideMenu } = false;
    switch(route.id) {
      case 'Home':
        return(<Home navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'The Chill':
        return(<Chill navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
    }
  }

  render() {
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            roundAvatar
            onPress={this.navigateToHome.bind(this)}
            avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg'}
            key='0'
            title={'Home'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg'}
            key='1'
            title={'The Chill'}
          />

        </List>
      </View>
    );

    const { toggleSideMenu } = this.props;

    return(
      <SideMenu
        ref="sidemenu"
        isOpen={ this.state.isOpen }
        menu={ MenuComponent }
        navigate={this.navigate}>

        <Navigator
          ref="navigator"
          navigationBar={navigationBar(this.toggleSideMenu)}
          initialRoute = {{ id: 'Home' }}
          renderScene = { this.navigatorRenderScene } />

      </SideMenu>

    )
  }

}

export default App;
