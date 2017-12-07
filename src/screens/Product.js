import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Display from 'react-native-display';

export default class Product extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>

        <Display enable={this.props.product.prices}>
        <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Prices</Text>
        <View style={styles.section}>
        {
          this.props.product.prices.map((l, i) => (
            <Display key={i} enable={!l.size}>
              <Text style={styles.bold}>${l.price}</Text>
            </Display>
          ))
        }
        {
          this.props.product.prices.map((l, i) => (
            <Display key={i} enable={l.size}>
              <Text style={styles.bold}>{l.size} ${l.price}</Text>
            </Display>
          ))
        }
        </View>
        </Display>

        <Display enable={this.props.product.description}>
        <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Description</Text>
        <View style={styles.section}>
          <Text style={styles.bold}>{this.props.product.description}</Text>
        </View>
        </Display>

        <Display enable={this.props.product.ingredients}>
        <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Ingredients</Text>
        <View style={styles.section}>
          {
            this.props.product.ingredients.map((l, i) => (
              <Text style={styles.bold} key={i}>{l.name}</Text>
            ))
          }
        </View>
        </Display>

        <Display enable={this.props.product.addons}>
        <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir' , fontWeight: 'bold', fontSize: 16 }}>Addons</Text>
        <View style={styles.section}>
        {
          this.props.product.addons.map((l, i) => (
            <Text style={styles.bold} key={i}>{l.name} +${l.price}</Text>
          ))
        }
        </View>
        </Display>
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
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#a3a3a3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: 'rgba(163, 163, 163, 0.5)',
    borderWidth: 1,
    alignItems: 'center'
  },
  bold: {
    fontFamily: 'avenir',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#414141'
  },
});
