import React from 'react';
import { Platform, Navigator, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBarTitle from './NavBarTitle';

const NavigationBar = (toggleSideMenu) => {
  const LeftButton = () => {
    return (
      <TouchableHighlight
        style={{marginTop: 7, marginLeft: 9}}
        onPress={toggleSideMenu}
        underlayColor='transparent'>
        <Icon
          color='white'
          name='menu'
          size={28}
        />
      </TouchableHighlight>
    );
  };

  const RightButton = () => {
    const fe = require('../images/fe.png');
    return (
      <Image
        source={fe}
        style={styles.logo}/>
    );
  };
//hello
  const Title = (route) => {
    return (
      <NavBarTitle style={styles.title} title={route.id} {...route.passProps} />
    )
  };

  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        RightButton,
        Title
      }}
      style={styles.navBar}
    />
  );
};

let styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: '#CC0F40',
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  logo: {
    width: 45,
    height: 45
  }
});

export default NavigationBar;
