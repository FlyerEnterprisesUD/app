import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

class Product extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <ListItem
            title="Sizes"
            hideChevron
          />

          {
            this.props.product.sizes.map((l, i) => (
              <ListItem
                key={i}
                title={l}
                hideChevron
              />
            ))
          }

          <ListItem
            title=""
            hideChevron
          />
          <ListItem
            title="Ingredients"
            hideChevron
          />

          {
            this.props.product.ingredients.map((l, i) => (
              <ListItem
                key={i}
                title={l}
                hideChevron
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  }
});

export default Product;
