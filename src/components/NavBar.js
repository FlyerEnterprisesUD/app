import React from 'react';
import { Platform, Navigator, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBarTitle from './NavBarTitle';

const NavigationBar = (toggleSideMenu) => {
  const LeftButton = () => {
    return (
      <TouchableHighlight
        style={{marginTop: 7, marginLeft: 9}}
        //iPhone should have topMargin of 7
        onPress={toggleSideMenu}
        underlayColor='transparent'>
        <Icon
          color='white'
          name='menu'
          size={28}
          //iPhone should be size 28
        />
      </TouchableHighlight>
    );
  };

  const RightButton = (navigator) => {
    const fe = require('../images/wfe2.png');

    return (
      <TouchableHighlight onPress={console.log('whyyyyyyy')}>
        <Image
          source={fe}
          style={styles.logo}/>
      </TouchableHighlight>
    );
  };

  const Title = (route) => {
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

export default NavigationBar;
