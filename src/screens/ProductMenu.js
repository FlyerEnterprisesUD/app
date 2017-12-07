import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      division: {},
      refreshing: false,
      group: {}
    }

    this.getDivision = this.getDivision.bind(this);
  }

  componentWillMount() {
    this.setState({division: this.props.division, group: this.props.group});
  }

  navigateToProduct(product) {
    this.props.navigator.push({id:'Ingredients Menu', user: this.props.user, division: this.state.division, product: product, token: this.props.token });
  }

  navigateToAddProduct() {
    this.props.navigator.push({id:'Add Product', user: this.props.user, group: this.props.group, division: this.state.division, token: this.props.token });
  }

  navigateToEditGroup() {
    this.props.navigator.push({id:'Edit Group', user: this.props.user, division: this.state.division, group: this.props.group, token: this.props.token });
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getDivision().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getDivision() {
    var url = 'https://flyerentapi.herokuapp.com/menu/getgroup';
    //var url = 'http://localhost:3000/division/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          groupId: this.props.group.id,
        })
      });

      let responseJson = await response.json();
      this.setState({group: responseJson.response.group});

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
      <TouchableOpacity onPress={this.navigateToEditGroup.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Edit {this.state.group.name} Group</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigateToAddProduct.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Product</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.state.group.name}</Text>
      {
        this.state.group.products.map((l, i) => (
          <View key={i}>
            <TouchableOpacity onPress={this.navigateToProduct.bind(this, l)}>
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

export default ProductMenu;
