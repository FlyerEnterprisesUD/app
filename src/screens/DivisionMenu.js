import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DivisionMenu extends Component {
  constructor(props) {
    super(props);
  }

  navigateToGroups() {
    this.props.navigator.push({id:'Group Menu', user: this.props.user, division: this.props.division, token: this.props.token });
  }

  navigateToCards() {
    this.props.navigator.push({id:'Admin Cards', user: this.props.user, division: this.props.division, token: this.props.token });
  }

  navigateToPromotions() {
    this.props.navigator.push({id:'Group Menu', user: this.props.user, division: this.props.division, token: this.props.token });
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <View>
          <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.props.division.name}</Text>

            <TouchableOpacity onPress={this.navigateToGroups.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Menu</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToCards.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Cards</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToPromotions.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Promotions</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          </View>


        </ScrollView>
      </View>
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
    borderWidth: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default DivisionMenu;
