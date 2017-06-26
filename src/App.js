import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { List, ListItem, SideMenu } from 'react-native-elements';
import navigationBar from './components/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBarTitle from './components/NavBarTitle';

import Home from './screens/Home';

import Chill from './screens/Chill';
import StusLanding from './screens/StusLanding';
import ArtStreetCafe from './screens/ArtStreetCafe';
import JuryBox from './screens/JuryBox';
import Blend from './screens/Blend';
import BlendExpress from './screens/BlendExpress';
import MovingAndStorage from './screens/MovingAndStorage';
import Galley from './screens/Galley';

import Division from './screens/Division';
import Menu from './screens/Menu';
import Promotions from './screens/Promotions';
import Cards from './screens/Cards';

import Product from './screens/Product';
import Promotion from './screens/Promotion';
import Settings from './screens/Settings';
import Rewards from './screens/Rewards';
import Card from './screens/Card';

import RoleMenu from './screens/RoleMenu';
import ChangePassword from './screens/ChangePassword';
import AccountSettings from './screens/AccountSettings';
import PunchQR from './screens/PunchQR';
import Approve from './screens/Approve';
import Submit from './screens/Submit';
import EditSubmit from './screens/EditSubmit';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      ArtStreetAbout: {},
      BlendAbout: {},
      BlendExpressAbout: {},
      ChillAbout: {},
      GalleyAbout: {},
      JuryBoxAbout: {},
      StusAbout: {}
    };

    this.toggleSideMenu = this.toggleSideMenu.bind(this);
    this.getArtStreetInfo = this.getArtStreetInfo.bind(this);
    this.getBlendInfo = this.getBlendInfo.bind(this);
    this.getBlendExpressInfo = this.getBlendExpressInfo.bind(this);
    this.getChillInfo = this.getChillInfo.bind(this);
    this.getGalleyInfo = this.getGalleyInfo.bind(this);
    this.getJuryBoxInfo = this.getJuryBoxInfo.bind(this);
    this.getStusInfo = this.getStusInfo.bind(this);
  }

  toggleSideMenu() {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: true
    });
  }

  navigateToHome() {
    this.refs.navigator.resetTo({id:'Home', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  navigateToChill() {
    this.refs.navigator.resetTo({id:'The Chill', user: this.props.user, token: this.props.token, about: this.state.ChillAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToStusLanding() {
    this.refs.navigator.resetTo({id:'Stuart\'s Landing', user: this.props.user, token: this.props.token, about: this.state.StusAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToArtStreetCafe() {
    this.refs.navigator.resetTo({id:'Art Street Cafe', user: this.props.user, token: this.props.token, about: this.state.ArtStreetAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToJuryBox() {
    this.refs.navigator.resetTo({id:'Jury Box', user: this.props.user, token: this.props.token, about: this.state.JuryBoxAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToBlend() {
    this.refs.navigator.resetTo({id:'The Blend', user: this.props.user, token: this.props.token, about: this.state.BlendAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToBlendExpress() {
    this.refs.navigator.resetTo({id:'The Blend Express', user: this.props.user, token: this.props.token, about: this.state.BlendExpressAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToGalley() {
    this.refs.navigator.resetTo({id:'The Galley', user: this.props.user, token: this.props.token, about: this.state.GalleyAbout });
    this.setState({
      isOpen: false
    });
  }

  navigateToMovingAndStorage() {
    this.refs.navigator.resetTo({id:'Moving And Storage', user: this.props.user, token: this.props.token, about: this.state.MovingAndStorageAbout });
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

  navigateToRoleMenu() {
    this.refs.navigator.push({id:'Role Menu', user: this.props.user, token: this.props.token });
    this.setState({
      isOpen: false
    });
  }

  componentWillMount() {
    this.getArtStreetInfo();
    this.getBlendInfo();
    this.getBlendExpressInfo();
    this.getChillInfo();
    this.getGalleyInfo();
    this.getJuryBoxInfo();
    this.getStusInfo();
  }

  async getArtStreetInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/artstreet';
    //var url = 'http://localhost:5000/artstreet';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ ArtStreetAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blend';
    //var url = 'http://localhost:5000/blend';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ BlendAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendExpressInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blendexpress';
    //var url = 'http://localhost:5000/blendexpress';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ BlendExpressAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getChillInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/chill';
    //var url = 'http://localhost:5000/chill';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ ChillAbout: responseJson.about });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getGalleyInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/galley';
    //var url = 'http://localhost:5000/galley';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ GalleyAbout: responseJson.about });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getJuryBoxInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/jurybox';
    //var url = 'http://localhost:5000/jurybox';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ JuryBoxAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getStusInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/stuslanding';
    //var url = 'http://localhost:5000/stuslanding';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ StusAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const { toggleSideMenu } = false;
    switch(route.id) {
      case 'Home':
        return(<Home navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);
      case 'The Chill':
        return(<Chill navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'Stuart\'s Landing':
        return(<StusLanding navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'Art Street Cafe':
        return(<ArtStreetCafe navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'Jury Box':
        return(<JuryBox navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'The Blend':
        return(<Blend navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'The Blend Express':
        return(<BlendExpress navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'The Galley':
        return(<Galley navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
      case 'Moving And Storage':
        return(<MovingAndStorage navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } about={route.about} {...route.passProps} />);
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
      case 'Role Menu':
        return(<RoleMenu navigator={ navigator } toggleSideMenu={ toggleSideMenu } user={ route.user } token={ route.token } {...route.passProps} />);

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

    const RoleMenuComponent = (
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
              onPress={this.navigateToRoleMenu.bind(this)}
              key='0'
              title={'FE Settings'}
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
            initialRoute = {{ id: 'Home', user: this.props.user }}
            renderScene = { this.navigatorRenderScene }
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={{
                  LeftButton: (route, navigator, index, navState) => {
                    if (index > 0) {
                      const leftAction = navigator.pop
                      return (
                        <TouchableOpacity
                          style={{marginTop: 7, marginLeft: 9}}
                          onPress={leftAction}
                          underlayColor='transparent'>
                          <Icon
                            color='white'
                            name='chevron-left'
                            size={28} />
                        </TouchableOpacity>
                      )
                    }
                    return(
                      <TouchableOpacity
                        style={{marginTop: 7, marginLeft: 9}}
                        onPress={this.toggleSideMenu}
                        underlayColor='transparent'>
                        <Icon
                          color='white'
                          name='menu'
                          size={28}
                        />
                      </TouchableOpacity>
                    );
                  },
                  RightButton: (route, navigator, index, navState) => {
                    const fe_logo_white = require('./images/wfe2.png');
                    return(
                      <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
                        <Image
                          source={fe_logo_white}
                          style={styles.logo}
                        />
                      </TouchableOpacity>
                    );
                  },
                  Title: (route, navigator, index, navState) => {
                    if(route.id == 'Product') {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} name={route.product.name} {...route.passProps} />
                      )
                    } else if(route.id == 'Menu') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else if(route.id == 'Promotions') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} {...route.passProps} />
                      )
                    }
                  },
                }}
                style={styles.navBar}
              />
            }
            />
        </SideMenu>
      );
    } else if (this.props.user.role == 'user'){
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ UserMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            initialRoute = {{ id: 'Home', user: this.props.user, token: this.props.token }}
            renderScene = { this.navigatorRenderScene }
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={{
                  LeftButton: (route, navigator, index, navState) => {
                    if (index > 0) {
                      const leftAction = navigator.pop
                      return (
                        <TouchableOpacity
                          style={{marginTop: 7, marginLeft: 9}}
                          onPress={leftAction}
                          underlayColor='transparent'>
                          <Icon
                            color='white'
                            name='chevron-left'
                            size={28} />
                        </TouchableOpacity>
                      )
                    }
                    return(
                      <TouchableOpacity
                        style={{marginTop: 7, marginLeft: 9}}
                        onPress={this.toggleSideMenu}
                        underlayColor='transparent'>
                        <Icon
                          color='white'
                          name='menu'
                          size={28}
                        />
                      </TouchableOpacity>
                    );
                  },
                  RightButton: (route, navigator, index, navState) => {
                    const fe_logo_white = require('./images/wfe2.png');
                    return(
                      <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
                        <Image
                          source={fe_logo_white}
                          style={styles.logo}
                        />
                      </TouchableOpacity>
                    );
                  },
                  Title: (route, navigator, index, navState) => {
                    if(route.id == 'Product') {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} name={route.product.name} {...route.passProps} />
                      )
                    } else if(route.id == 'Menu') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else if(route.id == 'Promotions') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} {...route.passProps} />
                      )
                    }
                  },
                }}
                style={styles.navBar}
              />
            }
          />
        </SideMenu>
      );
    } else {
      return(
        <SideMenu
          ref="sidemenu"
          isOpen={ this.state.isOpen }
          menu={ RoleMenuComponent }
          navigate={this.navigate}>

          <Navigator
            ref="navigator"
            initialRoute = {{ id: 'Home', user: this.props.user, token: this.props.token }}
            renderScene = { this.navigatorRenderScene }
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={{
                  LeftButton: (route, navigator, index, navState) => {
                    if (index > 0) {
                      const leftAction = navigator.pop
                      return (
                        <TouchableOpacity
                          style={{marginTop: 7, marginLeft: 9}}
                          onPress={leftAction}
                          underlayColor='transparent'>
                          <Icon
                            color='white'
                            name='chevron-left'
                            size={28} />
                        </TouchableOpacity>
                      )
                    }
                    return(
                      <TouchableOpacity
                        style={{marginTop: 7, marginLeft: 9}}
                        onPress={this.toggleSideMenu}
                        underlayColor='transparent'>
                        <Icon
                          color='white'
                          name='menu'
                          size={28}
                        />
                      </TouchableOpacity>
                    );
                  },
                  RightButton: (route, navigator, index, navState) => {
                    const fe_logo_white = require('./images/wfe2.png');
                    return(
                      <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
                        <Image
                          source={fe_logo_white}
                          style={styles.logo}
                        />
                      </TouchableOpacity>
                    );
                  },
                  Title: (route, navigator, index, navState) => {
                    if(route.id == 'Product') {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} name={route.product.name} {...route.passProps} />
                      )
                    } else if(route.id == 'Menu') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else if(route.id == 'Promotions') {
                        return (
                          <NavBarTitle style={styles.title} title={route.id} name={route.division} {...route.passProps} />
                        )
                    } else {
                      return (
                        <NavBarTitle style={styles.title} title={route.id} {...route.passProps} />
                      )
                    }
                  },
                }}
                style={styles.navBar}
              />
            }
            />
        </SideMenu>
      );
    }
  }
}

let styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: '#CC0F40',
    ...Platform.select({
      android: {
        height: 65
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
        //orginially 15
      }
    })
  },
  logo: {
    width: 28,
    height: 28,
    marginTop: 7,
    marginRight: 9,
    ...Platform.select({
      android: {
        width: 48,
        height: 48,
        marginRight: 10,
        marginTop: 8
      } })
  }
});

export default App;
