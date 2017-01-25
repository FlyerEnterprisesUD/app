import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Product extends Component {
  render() {
    return(
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
        {
          this.props.products.ingredients.map((l, i) => (
            <ListItem
              key={i}
              title={l}
            />
          ))
        }
        </List>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45
  }
});

export default Product;
