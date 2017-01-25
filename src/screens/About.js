import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class About extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text>The Chill</Text>
        <Text>Location:</Text>
        <Text style={{marginLeft: 10}}> { this.props.about.location }</Text>
        <Text>Hours:</Text>
        <Text style={{marginLeft: 10}}>{ this.props.about.hours[0] }</Text>
        <Text style={{marginLeft: 10}}>{ this.props.about.hours[1] }</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65,
    marginLeft: 2
  }
});

export default About;
