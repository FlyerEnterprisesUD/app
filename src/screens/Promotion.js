import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import moment from 'moment-timezone';

class Promotion extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 26, textAlign: 'center'}}>{this.props.promotion.title}</Text>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, textAlign: 'center'}}>{this.props.promotion.division}</Text>
        </Card>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 20, textAlign: 'center'}}>{moment(this.props.promotion.time).format("MMM DD")} - {moment(this.props.promotion.end).format("MMM DD")}</Text>
        </Card>
        <Card>
          <Text style={{fontFamily:'LabradorA-Regular', fontSize: 20, textAlign: 'center'}}>{this.props.promotion.body}</Text>
        </Card>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 65
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 200
  }
});

export default Promotion
