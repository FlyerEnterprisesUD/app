import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator, Image } from 'react-native';

class MovingAndStorageHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var home = require('../images/storagehome.jpg');
    return(
      <View style={styles.container}>

        <View>
          <Image
            style={{width: Dimensions.get('window').width, height: 200}}
            source={home}
          />
        </View>

        <View style={styles.info}>
          <View style={styles.about}>
            <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#515151'}}>About</Text>
            <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, color: '#515151'}}>FE Moving and Storage provides the students of the University of Dayton with a quality and convenient storage solution.</Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  buttonContainer:{
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#CC0F40',
    justifyContent: 'center'
  },
  button: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  info: {
    marginLeft: 75,
    marginRight: 75
  },
  about: {
    alignItems: 'flex-start',
    marginTop: 20
  },
  hours: {
    marginTop: 20
  },
  buttons: {
    marginLeft: 75,
    marginRight: 75,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default MovingAndStorageHome;
