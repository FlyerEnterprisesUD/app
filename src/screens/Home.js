import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DivisionBubbles from '../components/DivisionBubbles';

const test = ['0','1','2','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={ styles.container }>
        <DivisionBubbles navigator={ this.props.navigator } />
          <ScrollView>
          {
            test.map((l, i) => (
              <ListItem
                key={i}
                title={'Promotion ' + l}
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
  },
  text: {
    fontSize: 16,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginLeft: 10
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default Home;
