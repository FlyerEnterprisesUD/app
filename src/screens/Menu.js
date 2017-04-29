import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(product) {
    this.props.navigator.push({ id: 'Product', product: product });
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
        {
          this.props.menu.products.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.group}
              onPress={this.navigateTo.bind(this, l)}
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
    backgroundColor: 'white'
  }
});

export default Menu;
