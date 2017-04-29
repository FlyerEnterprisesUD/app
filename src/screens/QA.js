import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

class QA extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView style={styles.container} style={{marginBottom: 20}}>
        {
          this.props.questions.map((l, i) => (
            <Card key={i}>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 26, textAlign: 'center'}}>{l.question}</Text>
              <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, textAlign: 'center'}}>{l.answer}</Text>
            </Card>
          ))
        }
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default QA;
