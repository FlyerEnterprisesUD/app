import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';


class StusLanding extends Component {
  navigateToMenu() {
    this.props.navigator.push({ id: 'Menu', menu: menu });
  }

  render() {
    return(
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>

          <ListItem
            onPress={this.navigateToMenu.bind(this)}
            key='0'
            title={'Menu'}
          />

          <ListItem
            key='1'
            title={'Promotions'}
          />

          <ListItem
            key='2'
            title={'Loyalty'}
          />

        </List>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45
  }
});

export default StusLanding;
