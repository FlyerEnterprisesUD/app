// DO NOT RUN BEAUTIFY ON THIS FILE!!!
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Navigator,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  AsyncStorage
} from 'react-native';

import {List, ListItem, SideMenu} from 'react-native-elements';
import navigationBar from './components/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
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
import HeritageCoffeehouse from './screens/HeritageCoffeehouse';

import Division from './screens/Division';
import Menu from './screens/Menu';
import Promotions from './screens/Promotions';
import Cards from './screens/Cards';

import Product from './screens/Product';
import Promotion from './screens/Promotion';
import Settings from './screens/Settings';
import Rewards from './screens/Rewards';
import Card from './screens/Card';
import Bundles from './screens/Bundles';
import Bundle from './screens/Bundle';
import PunchCountDownQR from './screens/PunchCountDownQR';

import RoleMenu from './screens/RoleMenu';
import ChangeRole from './screens/ChangeRole';
import Users from './screens/Users';
import Submit from './screens/Submit';
import EditSubmit from './screens/EditSubmit';
import ApprovePush from './screens/ApprovePush';
import SubmitPush from './screens/SubmitPush';
import EditSubmitPush from './screens/EditSubmitPush';
import PunchQR from './screens/PunchQR';
import Approve from './screens/Approve';
import AddUserToBundle from './screens/AddUserToBundle';

import ChangePassword from './screens/ChangePassword';
import AccountSettings from './screens/AccountSettings';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Feedback from './screens/Feedback';

import AddCard from './screens/AddCard';
import EditCard from './screens/EditCard';
import AdminCards from './screens/AdminCards';
import DivisionsMenu from './screens/DivisionsMenu';
import DivisionMenu from './screens/DivisionMenu';
import GroupMenu from './screens/GroupMenu';
import AddGroup from './screens/AddGroup';
import ProductMenu from './screens/ProductMenu';
import AddProduct from './screens/AddProduct';
import EditGroup from './screens/EditGroup';
import IngredientsMenu from './screens/IngredientsMenu';
import AddIngredient from './screens/AddIngredient';
import AddPrice from './screens/AddPrice';
import AddAddon from './screens/AddAddon';
import EditProduct from './screens/EditProduct';
import EditIngredient from './screens/EditIngredient';
import EditPrice from './screens/EditPrice';
import EditAddon from './screens/EditAddon';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({isOpen: true});
  }

  logout() {
    console.log(this.props);
    AsyncStorage.setItem('token', '').done();
    //this.props.nav.resetTo({id: 'Login'});
  }

  navigateToHome() {
    this.refs.navigator.resetTo({id: 'Home', user: this.props.user, token: this.props.token});
    this.setState({isOpen: false});
  }

  navigateToMovingAndStorage() {
    this.refs.navigator.resetTo({id: 'Moving And Storage', user: this.props.user, token: this.props.token});
    this.setState({isOpen: false});
  }

  navigateToSettings() {
    this.refs.navigator.resetTo({id: 'Settings', nav: this.props.nav, user: this.props.user});
    this.setState({isOpen: false});
  }

  navigateToRewards() {
    this.refs.navigator.resetTo({id: 'Rewards', user: this.props.user, token: this.props.token});
    this.setState({isOpen: false});
  }

  navigateToBundles() {
    this.refs.navigator.resetTo({id: 'Bundles', user: this.props.user, token: this.props.token});
    this.setState({isOpen: false});
  }

  navigateToRoleMenu() {
    this.refs.navigator.resetTo({id: 'Role Menu', user: this.props.user, token: this.props.token});
    this.setState({isOpen: false});
  }

  async getChill() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 2,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'The Chill', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getHeritage() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 82,
        })
      });

      let responseJson = await response.json();

      console.log(responseJson.response);

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'Heritage Coffeehouse', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getStus() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 62,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'Stuart\'s Landing', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getGalley() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 32,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'The Galley', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendExpress() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 22,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'The Blend Express', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlend() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 12,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'The Blend', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getArtStreet() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: '52',
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'Art Street Cafe', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getJuryBox() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: 42,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.refs.navigator.resetTo({id:'Jury Box', user: this.props.user, token: this.props.token, division: responseJson.response });
        this.setState({isOpen: false});
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const {toggleSideMenu} = false;
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'The Chill':
        return (<Chill navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Stuart\'s Landing':
        return (<StusLanding navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Art Street Cafe':
        return (<ArtStreetCafe navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Jury Box':
        return (<JuryBox navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'The Blend':
        return (<Blend navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'The Blend Express':
        return (<BlendExpress navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'The Galley':
        return (<Galley navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Heritage Coffeehouse':
        return (<HeritageCoffeehouse navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Moving And Storage':
        return (<MovingAndStorage navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Menu':
        return (<Menu navigator={navigator} toggleSideMenu={toggleSideMenu} menu={route.menu} division={route.division} {...route.passProps}/>);
      case 'Product':
        return (<Product navigator={navigator} toggleSideMenu={toggleSideMenu} product={route.product} {...route.passProps}/>);
      case 'Promotion':
        return (<Promotion navigator={navigator} toggleSideMenu={toggleSideMenu} promotion={route.promotion} division={route.division} {...route.passProps}/>);
      case 'Settings':
        return (<Settings navigator={navigator} nav={route.nav} toggleSideMenu={toggleSideMenu} user={route.user} {...route.passProps}/>);
      case 'Change Password':
        return (<ChangePassword navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} {...route.passProps}/>);
      case 'Account Settings':
        return (<AccountSettings navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} {...route.passProps}/>);
      case 'Privacy Policy':
        return (<PrivacyPolicy navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} {...route.passProps}/>);
      case 'Feedback':
        return (<Feedback navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} {...route.passProps}/>);
      case 'PunchQR':
        return (<PunchQR navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} card={route.card} {...route.passProps}/>);
      case 'Rewards':
        return (<Rewards navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Bundles':
        return (<Bundles navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Bundle':
        return (<Bundle navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} countdown={route.countdown} bundle={route.bundle} {...route.passProps}/>);
      case 'PunchCountDownQR':
        return (<PunchCountDownQR navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} bundle={route.bundle} {...route.passProps}/>);
      case 'AddUserToBundle':
        return (<AddUserToBundle navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Card':
        return (<Card navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} card={route.card} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Cards':
        return (<Cards navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} cards={route.cards} division={route.division} {...route.passProps}/>);
      case 'Approve':
        return (<Approve navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Promotions':
        return (<Promotions navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Submit':
        return (<Submit navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'EditSubmit':
        return (<EditSubmit navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} promotion={route.promotion} {...route.passProps}/>);
      case 'Role Menu':
        return (<RoleMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Users':
        return (<Users navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Change Role':
        return (<ChangeRole navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} newUser={route.newUser} {...route.passProps}/>);
      case 'Approve Push':
        return (<ApprovePush navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Submit Push':
        return (<SubmitPush navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'EditSubmit Push':
        return (<EditSubmitPush navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} notification={route.notification} {...route.passProps}/>);
      case 'Add Card':
        return (<AddCard navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Edit Card':
        return (<EditCard navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} card={route.card} {...route.passProps}/>);
      case 'Admin Cards':
        return (<AdminCards navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Divisions Menu':
        return (<DivisionsMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} {...route.passProps}/>);
      case 'Division Menu':
        return (<DivisionMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Group Menu':
        return (<GroupMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} token={route.token} division={route.division} {...route.passProps}/>);
      case 'Add Group':
        return (<AddGroup navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} token={route.token} {...route.passProps}/>);
      case 'Product Menu':
        return (<ProductMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} group={route.group} token={route.token} {...route.passProps}/>);
      case 'Add Product':
        return (<AddProduct navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} group={route.group} token={route.token} {...route.passProps}/>);
      case 'Edit Group':
        return (<EditGroup navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} group={route.group} token={route.token} {...route.passProps}/>);
      case 'Ingredients Menu':
        return (<IngredientsMenu navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} product={route.product} token={route.token} {...route.passProps}/>);
      case 'Add Ingredient':
        return (<AddIngredient navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} product={route.product} token={route.token} {...route.passProps}/>);
      case 'Add Price':
        return (<AddPrice navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} product={route.product} token={route.token} {...route.passProps}/>);
      case 'Add Addon':
        return (<AddAddon navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} product={route.product} token={route.token} {...route.passProps}/>);
      case 'Edit Product':
        return (<EditProduct navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} product={route.product} token={route.token} {...route.passProps}/>);
      case 'Edit Ingredient':
        return (<EditIngredient navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} ingredient={route.ingredient} token={route.token} {...route.passProps}/>);
      case 'Edit Price':
        return (<EditPrice navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} price={route.price} token={route.token} {...route.passProps}/>);
      case 'Edit Addon':
        return (<EditAddon navigator={navigator} toggleSideMenu={toggleSideMenu} user={route.user} division={route.division} addon={route.addon} token={route.token} {...route.passProps}/>);

    }
  }

  render() {
    const fe = require('./images/fe.png');
    const chill = require('./images/TheChill.png');
    const blend = require('./images/TheBlend.png');
    const blendexpress = require('./images/TheBlendExpress.png');
    const galley = require('./images/TheGalley.png');
    const artstreetcafe = require('./images/ArtStreetCafe.png');
    const jurybox = require('./images/TheJuryBox.png');
    const stuslanding = require('./images/StuartsLanding.png');
    const heritage = require('./images/HeritageLogo.png');
    const movingandstorage = require('./images/MovingAndStorage.png');
    const settings = require('./images/settings.jpg');
    const rewards = require('./images/trophy_red.png');

    var user = '';
    if (this.props.user.name && this.props.user.name.trim() != "") {
      user = this.props.user.name;
    } else {
      user = this.props.user.username;
    }

    const GuestMenuComponent = (
      <ScrollView style={styles.container}>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Welcome, {user}!</Text>
          <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="home" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Home</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Divisions</Text>
          <TouchableOpacity onPress={this.getChill.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={chill} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The CHILL</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlend.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blend} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlendExpress.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blendexpress} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend Express</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getGalley.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={galley} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Galley</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getArtStreet.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={artstreetcafe} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>ArtStreet Cafe</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getJuryBox.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={jurybox} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Jury Box</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getStus.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={stuslanding} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Stuarts Landing</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getHeritage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={heritage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Heritage Coffeehouse</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToMovingAndStorage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={movingandstorage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Moving and Storage</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Settings</Text>
          <TouchableOpacity onPress={this.navigateToSettings.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="cog" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Settings</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={() => {
            AsyncStorage.setItem('token', '').done();
            this.props.nav.resetTo({id: 'Login'});
            }
          }>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );

    const UserMenuComponent = (
      <ScrollView style={styles.container}>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Welcome, {user}!</Text>
          <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="home" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Home</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToRewards.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="trophy" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>My Rewards</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToBundles.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="trophy" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Punch Card Bundles</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Divisions</Text>
          <TouchableOpacity onPress={this.getChill.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={chill} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The CHILL</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlend.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blend} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlendExpress.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blendexpress} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend Express</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getGalley.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={galley} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Galley</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getArtStreet.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={artstreetcafe} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>ArtStreet Cafe</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getJuryBox.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={jurybox} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Jury Box</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getStus.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={stuslanding} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Stuarts Landing</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getHeritage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={heritage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Heritage Coffeehouse</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToMovingAndStorage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={movingandstorage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Moving and Storage</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Settings</Text>
          <TouchableOpacity onPress={this.navigateToSettings.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="cog" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Settings</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={() => {
            AsyncStorage.setItem('token', '').done();
            this.props.nav.resetTo({id: 'Login'});
            }
          }>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );

    const RoleMenuComponent = (
      <ScrollView style={styles.container}>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Welcome, {user}!</Text>
          <TouchableOpacity onPress={this.navigateToHome.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="home" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Home</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToRewards.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="trophy" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>My Rewards</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToBundles.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="trophy" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Punch Card Bundles</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Divisions</Text>
          <TouchableOpacity onPress={this.getChill.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={chill} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The CHILL</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlend.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blend} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getBlendExpress.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={blendexpress} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Blend Express</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getGalley.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={galley} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Galley</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getArtStreet.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={artstreetcafe} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>ArtStreet Cafe</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getJuryBox.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={jurybox} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>The Jury Box</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getStus.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={stuslanding} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Stuarts Landing</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getHeritage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={heritage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Heritage Coffeehouse</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToMovingAndStorage.bind(this)}>
            <View style={styles.divisionSection}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={movingandstorage} style={{height: 36, width: 36}} />
                  <Text style={{marginTop: 8, marginLeft: 4, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Moving and Storage</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 10}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{marginTop: 20, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14 }}>Settings</Text>
          <TouchableOpacity onPress={this.navigateToRoleMenu.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="wrench" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>FE Settings</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToSettings.bind(this)}>
            <View style={styles.section}>
              <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <FontIcon name="cog" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14, color: '#414141'}}>Settings</Text>
                </View>
                <View>
                  <FontIcon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={() => {
            AsyncStorage.setItem('token', '').done();
            this.props.nav.resetTo({id: 'Login'});
            }
          }>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 14}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    } else if (this.props.user.role == 'User'){
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
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
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
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1
  },
  divisionSection: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: {
      width: 0,
      height: 2
    },
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
    marginTop: 4,
    backgroundColor: '#CC0F40',
    shadowColor: '#a3a3a3',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1,
    alignItems: 'center'
  },
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
      }
    })
  }
});
