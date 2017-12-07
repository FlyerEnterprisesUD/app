import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class GroupMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      division: {},
      refreshing: false
    }

    this.getDivision = this.getDivision.bind(this);
  }

  componentWillMount() {
    this.setState({division: this.props.division});
  }

  navigateToProducts(group) {
    this.props.navigator.push({id:'Product Menu', user: this.props.user, division: this.state.division, group: group, token: this.props.token });
  }

  navigateToAddGroup() {
    this.props.navigator.push({id:'Add Group', user: this.props.user, division: this.state.division, token: this.props.token });
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getDivision().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getDivision() {
    var url = 'https://flyerentapi.herokuapp.com/division/v2/get';
    //var url = 'http://localhost:3000/division/v2/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: this.props.division.id,
        })
      });

      let responseJson = await response.json();
      this.setState({division: responseJson.response});

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
      >
      <View style={{marginTop: 6}}>
      <TouchableOpacity onPress={this.navigateToAddGroup.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Group</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Groups</Text>
      {
        this.state.division.groups.map((l, i) => (
          <View key={i}>
            <TouchableOpacity onPress={this.navigateToProducts.bind(this, l)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>{l.name}</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))
      }
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: '#f2f2f2'
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

export default GroupMenu;
