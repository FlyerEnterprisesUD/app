import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,
  PushNotificationIOS,
  AlertIOS,
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Spinner from 'react-native-spinkit';
import AppIntro from 'react-native-app-intro';

import App from './src/App';
import Login from './src/Login';
import Create from './src/Create';
import Email from './src/Email';

class Intro extends Component {
  onSkipBtnHandle = (index) => {
    this.props.navigator.resetTo({id: 'Login'});
    //make this true for production
    AsyncStorage.setItem('intro', 'true').done();
  }
  doneBtnHandle = () => {
    this.props.navigator.resetTo({id: 'Login'});
    AsyncStorage.setItem('intro', 'true').done();
  }
  nextBtnHandle = (index) => {}
  onSlideChangeHandle = (index, total) => {}
  render() {
    const logo = require('./src/images/circle_only_white.png');

    return (
      <AppIntro onNextBtnClick={this.nextBtnHandle} onDoneBtnClick={this.doneBtnHandle} onSkipBtnClick={this.onSkipBtnHandle} onSlideChange={this.onSlideChangeHandle}>
        <View style={[
          styles.slide, {
            backgroundColor: '#CC0F40'
          }
        ]}>
          <Image style={{
            width: 100,
            height: 100
          }} source={logo}/>
          <View level={10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 10
            }}>Welcome to the</Text>
          </View>
          <View level={10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Flyer Enterprises App!</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>You can use this app</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>to browse menus, take</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>advantage of promotions,</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>earn rewards, and more!</Text>
          </View>
          <View level={8}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 20,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>Press Next to hear more</Text>
          </View>
        </View>
        <View style={[
          styles.slide, {
            backgroundColor: '#3478bc'
          }
        ]}>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Divisions</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>Access any divisions menu,</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>location, hours of operation,</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>promotions, and rewards</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>by clicking on that division</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>on the top of the home screen</Text>
          </View>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>or in the side menu.</Text>
          </View>
        </View>
        <View style={[
          styles.slide, {
            backgroundColor: '#CC0F40'
          }
        ]}>
          <View level={8}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Menus</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>Within each division page,</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>you can see menus before</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>you even arrive!</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 10
            }}>View ingredients, prices,</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>and descriptions of</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>each product.</Text>
          </View>
        </View>
        <View style={[
          styles.slide, {
            backgroundColor: '#3478bc'
          }
        ]}>
          <View level={5}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Rewards</Text>
          </View>
          <View level={10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>To view rewards cards,</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>go to an individual division</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>and select Rewards. Select</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>a rewards card and start</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>gaining points!</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 10
            }}>Click the star on the rewards</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>card to favorite the card.</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Then view the card in the</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>rewards page from the</Text>
          </View>
          <View level={15}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>side menu.</Text>
          </View>
        </View>
        <View style={[
          styles.slide, {
            backgroundColor: '#CC0F40'
          }
        ]}>
          <View level={8}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>Promotions</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 20
            }}>Gain easy access</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>to FE promotions by going</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>to the division page and clicking</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>promotions!</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center',
              marginTop: 10
            }}>Be the first to get</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>discounts and announcements by</Text>
          </View>
          <View level={-10}>
            <Text style={{
              fontFamily: 'avenir',
              fontWeight: 'bold',
              fontSize: 22,
              color: '#FFFFFF',
              alignItems: 'center'
            }}>enabling push notifications.</Text>
          </View>

        </View>
      </AppIntro>
    );
  }
}

class SpinnerContent extends Component {
  render() {
    return (
      <View style={styles.spinnerContainer}>
        <Spinner isVisible={true} size={100} type="Wave" color="#FFFFFF"/>
      </View>
    );
  }
}

class app extends Component {
  constructor() {
    super();
    //set intro to false to use the intro functionality
    this.state = {
      intro: false,
      loading: true
    };
    this.checkIntro = this.checkIntro.bind(this);
  }

  async checkIntro() {
    //AsyncStorage.setItem('intro', '').done();
    try {
      const intro = await AsyncStorage.getItem('intro');
      if (intro !== null) {
        this.setState({intro: false, loading: false});
        console.log("checked");
      } else {
        console.log("Play the Intro");
        this.setState({intro: true, loading: false});
      }
    } catch (error) {
      console.log(error);
    }
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    const {toggleSideMenu} = false;
    switch (route.id) {
      case 'Intro':
        return (<Intro navigator={navigator}/>);
      case 'Login':
        return (<Login navigator={navigator}/>);
      case 'Create':
        return (<Create navigator={navigator}/>);
      case 'Email':
        return (<Email navigator={navigator}/>);
      case 'App':
        return (<App user={route.user} token={route.token} nav={navigator}/>);
    }
  }

  componentWillMount() {
    this.checkIntro();
    PushNotificationIOS.addEventListener('register', this._onRegistered);
    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
    PushNotificationIOS.requestPermissions();
  }

  _onRegistered(deviceToken) {
    AsyncStorage.setItem('devicetoken', deviceToken).done();
    console.log(deviceToken);
  }

  _onRegistrationError(error) {
    console.log(error);
  }

  _onRemoteNotification(notification) {
    AlertIOS.alert('Flyer Enterprises', notification.getMessage(), [
      {
        text: 'Dismiss',
        onPress: null
      }
    ]);
  }

  _onLocalNotification(notification) {
    AlertIOS.alert('Local Notification Received', 'Alert message: ' + notification.getMessage(), [
      {
        text: 'Dismiss',
        onPress: null
      }
    ]);
  }

  render() {
    if (this.state.loading) {
      return <SpinnerContent/>;
    }

    if (!this.state.intro) {
      return (<Navigator ref="main-navigator" initialRoute={{
        id: 'Login'
      }} renderScene={this.navigatorRenderScene}/>);
    } else {
      return (<Navigator ref="main-navigator" initialRoute={{
        id: 'Intro'
      }} renderScene={this.navigatorRenderScene}/>);
    }

  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: '#3478bc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('app', () => app);
