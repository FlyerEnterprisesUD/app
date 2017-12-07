import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

class QA extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={styles.container}>
      <View style={{marginTop: 6, marginBottom: 16}}>
      {
        this.props.questions.map((l, i) => (
          <View style={styles.section} key={i}>
            <Text style={styles.bold}>{l.question}</Text>
            <Text style={styles.reg}>{l.answer}</Text>
          </View>
        ))
      }
      </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
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
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1
  },
  bold: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 16,
    color: '#414141'
  },
  reg: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    color: '#414141',
    marginTop: 5
  }
});

export default QA;
