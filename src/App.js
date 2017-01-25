import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator } from 'react-native'
import { List, ListItem, SideMenu } from 'react-native-elements';
import navigationBar from './components/NavBar';

import Home from './screens/Home';
import Chill from './screens/Chill';
import Menu from './screens/Menu';
import Product from './screens/Product';
import About from './screens/About';

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
      isOpen: false
    });
  }

  navigateToChill() {
    this.refs.navigator.push({id:'The Chill'});
    this.setState({
      isOpen: false
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
      case 'Menu':
        return(<Menu navigator={ navigator } toggleSideMenu={ toggleSideMenu } menu={ route.menu } {...route.passProps} />);
      case 'Product':
        return(<Product navigator={ navigator } toggleSideMenu={ toggleSideMenu } product={ route.product } {...route.passProps} />);
      case 'About':
        return(<About navigator={ navigator } toggleSideMenu={ toggleSideMenu } about={ route.about } {...route.passProps} />);
    }
  }

  render() {
    const femenu = require('./images/femenu.png');
    const chillmenu = require('./images/chillmenu.jpg');

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            roundAvatar
            onPress={this.navigateToHome.bind(this)}
            avatar={femenu}
            key='0'
            title={'Home'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chillmenu}
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
