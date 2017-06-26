import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

class Product extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <Card>
            <Text style={{fontFamily:'LabradorA-Regular', fontSize: 18, textAlign: 'center'}}>{this.props.product.price}</Text>
          </Card>

          <Card>
          {
            this.props.product.ingredients.map((l, i) => (
              <Text key={i} style={{fontFamily:'LabradorA-Regular', fontSize: 18, textAlign: 'center'}}>{l}</Text>
            ))
          }
          </Card>

          <View style={{marginBottom: 20}} />

        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 65
  }
});

export default Product;
