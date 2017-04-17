import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator, ScrollView } from 'react-native';
import { List, ListItem, SideMenu } from 'react-native-elements';
import navigationBar from './components/NavBar';

import Home from './screens/Home';
import Chill from './screens/Chill';
import StusLanding from './screens/StusLanding';
import ArtStreetCafe from './screens/ArtStreetCafe';
import JuryBox from './screens/JuryBox';
import Blend from './screens/Blend';
import BlendExpress from './screens/BlendExpress';
import MovingAndStorage from './screens/MovingAndStorage';
import Galley from './screens/Galley';
import Menu from './screens/Menu';
import Product from './screens/Product';
import Promotion from './screens/Promotion';
import Settings from './screens/Settings';
import Rewards from './screens/Rewards';
import Card from './screens/Card';
import Cards from './screens/Cards';
import ChangePassword from './screens/ChangePassword';
import AccountSettings from './screens/AccountSettings';
import PunchQR from './screens/PunchQR';
import Approve from './screens/Approve';
import Submit from './screens/Submit';
import EditSubmit from './screens/EditSubmit';
import Promotions from './screens/Promotions';

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
    this.refs.navigator.replace({id:'Home', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToChill() {
    this.refs.navigator.push({id:'The Chill', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToStusLanding() {
    this.refs.navigator.push({id:'Stuart\'s Landing', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToArtStreetCafe() {
    this.refs.navigator.push({id:'Art Street Cafe', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToJuryBox() {
    this.refs.navigator.push({id:'Jury Box', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToBlend() {
    this.refs.navigator.push({id:'The Blend', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToBlendExpress() {
    this.refs.navigator.push({id:'The Blend Express', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToGalley() {
    this.refs.navigator.push({id:'The Galley', user: this.props.user, token: this.props.token, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToMovingAndStorage() {
    this.refs.navigator.push({id:'Moving And Storage', user: this.props.user, token: this.props.token });
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

  navigateToRewards() {
    this.refs.navigator.push({id:'Rewards', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToApprove() {
    this.refs.navigator.push({id:'Approve', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToSubmit() {
    this.refs.navigator.push({id:'Submit', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const { toggleSideMenu } = false;
    switch(route.id) {
      case 'Home':
        return(<Home navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'The Chill':
        return(<Chill navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Stuart\'s Landing':
        return(<StusLanding navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Art Street Cafe':
        return(<ArtStreetCafe navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Jury Box':
        return(<JuryBox navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'The Blend':
        return(<Blend navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'The Blend Express':
        return(<BlendExpress navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'The Galley':
        return(<Galley navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Moving And Storage':
        return(<MovingAndStorage navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Menu':
        return(<Menu navigator={ navigator } toggleSideMenu={ toggleSideMenu } menu={ route.menu } division={route.division} {...route.passProps} />);
      case 'Product':
        return(<Product navigator={ navigator } toggleSideMenu={ toggleSideMenu } product={ route.product } {...route.passProps} />);
      case 'Promotion':
        return(<Promotion navigator={ navigator } toggleSideMenu={ toggleSideMenu } promotion={ route.promotion } {...route.passProps} />);
      case 'Settings':
        return(<Settings navigator={ navigator } nav={ route.nav } toggleSideMenu={ toggleSideMenu } user={ route.user } {...route.passProps} />);
      case 'Change Password':
        return(<ChangePassword navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } {...route.passProps} />);
      case 'Account Settings':
        return(<AccountSettings navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } {...route.passProps} />);
      case 'PunchQR':
        return(<PunchQR navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } card={ route.card } {...route.passProps} />);
      case 'Rewards':
        return(<Rewards navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Card':
        return(<Card navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } card={ route.card } token={ route.token } {...route.passProps} />);
      case 'Cards':
        return(<Cards navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } cards={ route.cards } division={ route.division} {...route.passProps} />);
      case 'Approve':
        return(<Approve navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'Promotions':
        return(<Promotions navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } division={ route.division } {...route.passProps} />);
      case 'Submit':
        return(<Submit navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'EditSubmit':
        return(<EditSubmit navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } promotion={ route.promotion } {...route.passProps} />);
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
    const movingandstorage = require('./images/movingandstorage.jpg');
    const settings = require('./images/settings.jpg');
    const rewards = require('./images/trophy_red.png');

    var user = '';
    if(this.props.user.name && this.props.user.name.trim() != "") {
      user = this.props.user.name;
    } else {
      user = this.props.user.username;
    }

    const UserMenuComponent = (
      <View style={{flex: 1, backgroundColor: '#CC0F40'}}>
        <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: 20}}>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            key='0'
            title={ 'Welcome, ' + user}
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
            onPress={this.navigateToRewards.bind(this)}
            avatar={rewards}
            key='2'
            title={'My Rewards'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chill}
            key='0'
            title={'The CHILL'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlend.bind(this)}
            avatar={blend}
            key='1'
            title={'The Blend'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlendExpress.bind(this)}
            avatar={blendexpress}
            key='2'
            title={'The Blend Express'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToGalley.bind(this)}
            avatar={galley}
            key='3'
            title={'The Galley'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToArtStreetCafe.bind(this)}
            avatar={artstreetcafe}
            key='4'
            title={'Art Street Cafe'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToJuryBox.bind(this)}
            avatar={jurybox}
            key='5'
            title={'The Jury Box'}
          />

          <ListItem
            roundAvatar
            avatar={stuslanding}
            onPress={this.navigateToStusLanding.bind(this)}
            key='6'
            title={'Stuart\'s Landing'}
          />

          <ListItem
            roundAvatar
            avatar={movingandstorage}
            onPress={this.navigateToMovingAndStorage.bind(this)}
            key='7'
            title={'Moving and Storage'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSettings.bind(this)}
              key='0'
              title={'Settings'}
            />
          </List>

        </ScrollView>
      </View>
    );

    const GuestMenuComponent = (
      <View style={{flex: 1, backgroundColor: '#CC0F40'}}>
        <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: 20}}>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            key='0'
            title={ 'Welcome, ' + user}
            hideChevron
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToHome.bind(this)}
            avatar={fe}
            key='1'
            title={'Home'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chill}
            key='0'
            title={'The CHILL'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlend.bind(this)}
            avatar={blend}
            key='1'
            title={'The Blend'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlendExpress.bind(this)}
            avatar={blendexpress}
            key='2'
            title={'The Blend Express'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToGalley.bind(this)}
            avatar={galley}
            key='3'
            title={'The Galley'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToArtStreetCafe.bind(this)}
            avatar={artstreetcafe}
            key='4'
            title={'Art Street Cafe'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToJuryBox.bind(this)}
            avatar={jurybox}
            key='5'
            title={'The Jury Box'}
          />

          <ListItem
            roundAvatar
            avatar={stuslanding}
            onPress={this.navigateToStusLanding.bind(this)}
            key='6'
            title={'Stuart\'s Landing'}
          />

          <ListItem
            roundAvatar
            avatar={movingandstorage}
            onPress={this.navigateToMovingAndStorage.bind(this)}
            key='7'
            title={'Moving and Storage'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSettings.bind(this)}
              key='0'
              title={'Settings'}
            />
          </List>

        </ScrollView>
      </View>
    );

    const SubmitterMenuComponent = (
      <View style={{flex: 1, backgroundColor: '#CC0F40'}}>
        <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: 20}}>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            key='0'
            title={ 'Welcome, ' + user}
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
            onPress={this.navigateToRewards.bind(this)}
            avatar={rewards}
            key='2'
            title={'My Rewards'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chill}
            key='0'
            title={'The CHILL'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlend.bind(this)}
            avatar={blend}
            key='1'
            title={'The Blend'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlendExpress.bind(this)}
            avatar={blendexpress}
            key='2'
            title={'The Blend Express'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToGalley.bind(this)}
            avatar={galley}
            key='3'
            title={'The Galley'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToArtStreetCafe.bind(this)}
            avatar={artstreetcafe}
            key='4'
            title={'Art Street Cafe'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToJuryBox.bind(this)}
            avatar={jurybox}
            key='5'
            title={'The Jury Box'}
          />

          <ListItem
            roundAvatar
            avatar={stuslanding}
            onPress={this.navigateToStusLanding.bind(this)}
            key='6'
            title={'Stuart\'s Landing'}
          />

          <ListItem
            roundAvatar
            avatar={movingandstorage}
            onPress={this.navigateToMovingAndStorage.bind(this)}
            key='7'
            title={'Moving and Storage'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSubmit.bind(this)}
              key='0'
              title={'Submit'}
            />

            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSettings.bind(this)}
              key='1'
              title={'Settings'}
            />
          </List>

        </ScrollView>
      </View>
    );

    const ApproverMenuComponent = (
      <View style={{flex: 1, backgroundColor: '#CC0F40'}}>
        <ScrollView style={{backgroundColor: '#FFFFFF', marginTop: 20}}>

          <List containerStyle={{marginTop: 0, marginBottom: 0}}>
          <ListItem
            key='0'
            title={ 'Welcome, ' + user}
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
            onPress={this.navigateToRewards.bind(this)}
            avatar={rewards}
            key='2'
            title={'My Rewards'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
          <ListItem
            roundAvatar
            onPress={this.navigateToChill.bind(this)}
            avatar={chill}
            key='0'
            title={'The CHILL'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlend.bind(this)}
            avatar={blend}
            key='1'
            title={'The Blend'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToBlendExpress.bind(this)}
            avatar={blendexpress}
            key='2'
            title={'The Blend Express'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToGalley.bind(this)}
            avatar={galley}
            key='3'
            title={'The Galley'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToArtStreetCafe.bind(this)}
            avatar={artstreetcafe}
            key='4'
            title={'Art Street Cafe'}
          />

          <ListItem
            roundAvatar
            onPress={this.navigateToJuryBox.bind(this)}
            avatar={jurybox}
            key='5'
            title={'The Jury Box'}
          />

          <ListItem
            roundAvatar
            avatar={stuslanding}
            onPress={this.navigateToStusLanding.bind(this)}
            key='6'
            title={'Stuart\'s Landing'}
          />

          <ListItem
            roundAvatar
            avatar={movingandstorage}
            onPress={this.navigateToMovingAndStorage.bind(this)}
            key='7'
            title={'Moving and Storage'}
          />
          </List>

          <List containerStyle={{marginTop: 0}}>
            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSubmit.bind(this)}
              key='0'
              title={'Submit'}
            />

            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToApprove.bind(this)}
              key='1'
              title={'Approve'}
            />

            <ListItem
              roundAvatar
              avatar={settings}
              onPress={this.navigateToSettings.bind(this)}
              key='2'
              title={'Settings'}
            />
          </List>

        </ScrollView>
      </View>
    );

    const { toggleSideMenu } = this.props;

    if(this.props.user.username == 'Guest'){
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ GuestMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            navigationBar={navigationBar(this.toggleSideMenu)}
            initialRoute = {{ id: 'Home', user: this.props.user }}
            renderScene = { this.navigatorRenderScene } />
        </SideMenu>
      );
    } else if (this.props.user.role == 'approver' || this.props.user.role == 'admin'){
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ ApproverMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            navigationBar={navigationBar(this.toggleSideMenu)}
            initialRoute = {{ id: 'Home', user: this.props.user, token: this.props.token }}
            renderScene = { this.navigatorRenderScene } />
        </SideMenu>
      );
    } else if (this.props.user.role == 'submitter'){
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ SubmitterMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            navigationBar={navigationBar(this.toggleSideMenu)}
            initialRoute = {{ id: 'Home', user: this.props.user, token: this.props.token }}
            renderScene = { this.navigatorRenderScene } />
        </SideMenu>
      );
    } else {
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ UserMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            navigationBar={navigationBar(this.toggleSideMenu)}
            initialRoute = {{ id: 'Home', user: this.props.user, token: this.props.token }}
            renderScene = { this.navigatorRenderScene } />
        </SideMenu>
      );
    }

  }

}

export default App;
