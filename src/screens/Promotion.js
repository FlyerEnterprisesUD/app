import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment-timezone';

class Promotion extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 20, textAlign: 'center'}}>{this.props.promotion.name}</Text>
          <Text style={{fontFamily: 'avenir',  fontSize: 14, textAlign: 'center'}}>{this.props.division}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, textAlign: 'center'}}>{moment(this.props.promotion.startTime).format("MMM DD")} - {moment(this.props.promotion.endTime).format("MMM DD")}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 14, textAlign: 'center'}}>{this.props.promotion.body}</Text>
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 65
  },
  section: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    marginBottom: 6,
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1
  }
});

export default Promotion
