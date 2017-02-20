import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator } from 'react-native'
import { List, ListItem, SideMenu } from 'react-native-elements';
import navigationBar from './components/NavBar';

import Home from './screens/Home';
import Chill from './screens/Chill';
import StusLanding from './screens/StusLanding';
import ArtStreetCafe from './screens/ArtStreetCafe';
import JuryBox from './screens/JuryBox';
import Blend from './screens/Blend';
import BlendExpress from './screens/BlendExpress';
import Galley from './screens/Galley';
import Menu from './screens/Menu';
import Product from './screens/Product';
import Promotion from './screens/Promotion';
import Settings from './screens/Settings';

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

  navigateToStusLanding() {
    this.refs.navigator.push({id:'Stuart\'s Landing'});
    this.setState({
      isOpen: false
    });
  }

  navigateToArtStreetCafe() {
    this.refs.navigator.push({id:'Art Street Cafe'});
    this.setState({
      isOpen: false
    });
  }

  navigateToJuryBox() {
    this.refs.navigator.push({id:'Jury Box'});
    this.setState({
      isOpen: false
    });
  }

  navigateToBlend() {
    this.refs.navigator.push({id:'The Blend'});
    this.setState({
      isOpen: false
    });
  }

  navigateToBlendExpress() {
    this.refs.navigator.push({id:'The Blend Express'});
    this.setState({
      isOpen: false
    });
  }

  navigateToGalley() {
    this.refs.navigator.push({id:'The Galley'});
    this.setState({
      isOpen: false
    });
  }

  navigateToSettings() {
    this.refs.navigator.push({id:'Settings', nav: this.props.nav, user: this.props.user });
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
      case 'Stuart\'s Landing':
        return(<StusLanding navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'Art Street Cafe':
        return(<ArtStreetCafe navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'Jury Box':
        return(<JuryBox navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'The Blend':
        return(<Blend navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'The Blend Express':
        return(<BlendExpress navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'The Galley':
        return(<Galley navigator={ navigator } toggleSideMenu={ toggleSideMenu } {...route.passProps} />);
      case 'Menu':
        return(<Menu navigator={ navigator } toggleSideMenu={ toggleSideMenu } menu={ route.menu } {...route.passProps} />);
      case 'Product':
        return(<Product navigator={ navigator } toggleSideMenu={ toggleSideMenu } product={ route.product } {...route.passProps} />);
      case 'Promotion':
        return(<Promotion navigator={ navigator } toggleSideMenu={ toggleSideMenu } promo={ route.promo } {...route.passProps} />);
      case 'Settings':
        return(<Settings navigator={ navigator } nav={ route.nav } toggleSideMenu={ toggleSideMenu } user={ route.user } {...route.passProps} />);
    }
  }

  render() {
    const fe = require('./images/fe.png');
    const chill = require('./images/chill.jpg');
    const blend = require('./images/blend.jpg');
    const blendexpress = require('./images/blendexpress.jpg');
    const galley = require('./images/galley.jpg');
    const artstreetcafe = require('./images/artstreetcafe.jpg');
    const jurybox = require('./images/jurybox.jpg');
    const stuslanding = require('./images/stuslanding.jpg');
    const settings = require('./images/settings.jpg');

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            key='0'
            title={ 'Welcome, ' + this.props.user.username + ' (' + this.props.user.role + ')'}
            hideChevron
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToHome.bind(this)}
            avatar={fe}
            key='1'
            title={'Home'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chill}
            key='2'
            title={'The CHILL'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlend.bind(this)}
            avatar={blend}
            key='3'
            title={'The Blend'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlendExpress.bind(this)}
            avatar={blendexpress}
            key='4'
            title={'The Blend Express'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToGalley.bind(this)}
            avatar={galley}
            key='5'
            title={'The Galley'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToArtStreetCafe.bind(this)}
            avatar={artstreetcafe}
            key='6'
            title={'Art Street Cafe'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToJuryBox.bind(this)}
            avatar={jurybox}
            key='7'
            title={'The Jury Box'}
          />

          <ListItem
            roundAvatar
            avatar={stuslanding}
            onPress={this.navigateToStusLanding.bind(this)}
            key='8'
            title={'Stuart\'s Landing'}
          />

          <ListItem
            roundAvatar
            avatar={settings}
            onPress={this.navigateToSettings.bind(this)}
            key='9'
            title={'Settings'}
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
