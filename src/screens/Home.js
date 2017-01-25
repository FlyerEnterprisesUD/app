import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, ListView , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DivisionBubbles from '../components/DivisionBubbles';

const test = ['0','1','2','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];

class Home extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      promoDataSource: ds.cloneWithRows(test)
    };
  }

  renderTestRow(test) {
    return(
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>Promotion {test}</Text>

        <TouchableOpacity style={{flex:1,alignItems:'flex-end', marginTop:7}}>
        <Icon
            name={'chevron-right'}
            color={'#bdc6cf'}
            size={24}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return(
      <View style={ styles.container }>

        <DivisionBubbles navigator={ this.props.navigator } />
        <ListView
          dataSource={this.state.promoDataSource}
          renderRow={(test) => {return this.renderTestRow(test)}}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />

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
