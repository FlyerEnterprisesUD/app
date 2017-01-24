import React from 'react';
import { Platform, Navigator, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBarTitle from './NavBarTitle';

// Create the navigation bar
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
    return null;
  };

  const Title = (route) => {
    return (
      <NavBarTitle style={styles.title} title={route.id} {...route.passProps} />
    )
  };

  return (
    // Mapping the navigation bar with the components
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
    backgroundColor: 'grey',
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
});

export default NavigationBar;
