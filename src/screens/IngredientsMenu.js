import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      division: {},
      refreshing: false,
      product: {}
    }

    this.getDivision = this.getDivision.bind(this);
  }

  componentWillMount() {
    this.setState({division: this.props.division, product: this.props.product});
  }

  navigateToIngredient(ingredient) {
    this.props.navigator.push({id:'Edit Ingredient', user: this.props.user, division: this.state.division, ingredient: ingredient, token: this.props.token });
  }

  navigateToPrice(price) {
    this.props.navigator.push({id:'Edit Price', user: this.props.user, division: this.state.division, price: price, token: this.props.token });
  }

  navigateToAddon(addon) {
    this.props.navigator.push({id:'Edit Addon', user: this.props.user, division: this.state.division, addon: addon, token: this.props.token });
  }

  navigateToAddIngredient() {
    this.props.navigator.push({id:'Add Ingredient', user: this.props.user, division: this.state.division, product: this.state.product, token: this.props.token });
  }

  navigateToAddPrice() {
    this.props.navigator.push({id:'Add Price', user: this.props.user, division: this.state.division, product: this.state.product, token: this.props.token });
  }

  navigateToAddAddon() {
    this.props.navigator.push({id:'Add Addon', user: this.props.user, division: this.state.division, product: this.state.product, token: this.props.token });
  }

  navigateToEditProduct() {
    this.props.navigator.push({id:'Edit Product', user: this.props.user, division: this.state.division, product: this.state.product, token: this.props.token });
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getDivision().then(() => {
      this.setState({refreshing: false});
    });
  }

  async getDivision() {
    var url = 'https://flyerentapi.herokuapp.com/menu/getproduct';
    //var url = 'http://localhost:3000/division/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.product.id,
        })
      });

      let responseJson = await response.json();
      this.setState({product: responseJson.response.product});

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
      <TouchableOpacity onPress={this.navigateToEditProduct.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Edit {this.state.product.name}</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigateToAddIngredient.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Ingredient</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigateToAddPrice.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Price</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigateToAddAddon.bind(this)}>
        <View style={styles.section}>
          <View style={styles.item}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
              <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Addon</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Ingredients</Text>
      {
        this.state.product.ingredients.map((l, i) => (
          <View key={i}>
            <TouchableOpacity onPress={this.navigateToIngredient.bind(this, l)}>
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
      <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Prices</Text>
      {
        this.state.product.prices.map((l, i) => (
          <View key={i}>
            <TouchableOpacity onPress={this.navigateToPrice.bind(this, l)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name={'bookmark'} size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>{l.size} {l.price}</Text>
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
      <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Addons</Text>
      <View style={{marginBottom: 20}}>
      {
        this.state.product.addons.map((l, i) => (
          <View key={i}>
            <TouchableOpacity onPress={this.navigateToAddon.bind(this, l)}>
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
      </View>
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
