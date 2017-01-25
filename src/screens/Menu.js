import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { List, ListItem } from 'react-native-elements';

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
        <List containerStyle={{marginBottom: 20}}>
        {
          this.props.menu.products.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.group}
              //onPress={this.navigateTo(l)}
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

export default Menu;
