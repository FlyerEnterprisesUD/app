import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native-elements';

class NavBarTitle extends Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.title == 'The Chill') {
      return(
        <View>
          <Text style={ styles.text }>The CHILL</Text>
        </View>
      );
    }
    if(this.props.title == 'Stuart\'s Landing') {
      return(
        <View>
          <Text style={ styles.text }>Stuarts Landing</Text>
        </View>
      );
    }
    if(this.props.title == 'Art Street Cafe') {
      return(
        <View>
          <Text style={ styles.text }>ArtStreet Cafe</Text>
        </View>
      );
    }
    if(this.props.title == 'Jury Box') {
      return(
        <View>
          <Text style={ styles.text }>The Jury Box</Text>
        </View>
      );
    }
    if(this.props.title == 'The Blend') {
      return(
        <View>
          <Text style={ styles.text }>The Blend</Text>
        </View>
      );
    }
    if(this.props.title == 'The Blend Express') {
      return(
        <View>
          <Text style={ styles.text }>The Blend Express</Text>
        </View>
      );
    }
    if(this.props.title == 'The Galley') {
      return(
        <View>
          <Text style={ styles.text }>The Galley</Text>
        </View>
      );
    }
    if(this.props.title == 'Moving and Storage') {
      return(
        <View>
          <Text style={ styles.text }>Moving and Storage</Text>
        </View>
      );
    }
    return(
      <View>
        <Text style={ styles.text }>{this.props.title}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
});

export default NavBarTitle
