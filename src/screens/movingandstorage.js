import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, Dimensions, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class movingandstorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      ProductList: {},
      How: {},
      FAQs: {}
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentWillMount() {
    this.getInfo();
  }

  async getInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/movingandstorage';
    //var url = 'http://localhost:5000/movingandstorage';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ about: responseJson.about.info });
      this.setState({ ProductList: responseJson.ProductList });
      this.setState({ How: responseJson.How})
      this.setState({ FAQs: responseJson.FAQs})

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  navigateToProductList() {
    this.props.navigator.push({ id: 'Menu', menu: this.state.products });
  }

  navigateToHow() {
    this.props.navigator.push({ id: 'How', menu: this.state.How });
  }

  navigateToFAQs() {
    this.props.navigator.push({ id: 'FAQs', menu: this.state.FAQs });
  }


  render() {
    return(
      <View style={styles.container}>

        <View>
          <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Contact Info</Text>
          <Text style={{textAlign: 'center'}}>Email: FEStorage@flyerenterprises.com</Text>
          <Text style={{textAlign: 'center'}}>Phone: (937) 687-8678</Text>
          <Text style={{textAlign: 'center'}}>Website: FlyerEnterprises.com/Storage/</Text>
          <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>About Us</Text>
          <Text style={{textAlign: 'center'}}>{ this.state.about }</Text>
        </View>

        <View style={{marginBottom:10}}>
          <TouchableOpacity onPress={ this.navigateToProductList.bind(this) }>
            <Text style={ styles.button }>Product List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.navigateToHow.bind(this) }>
            <Text style={ styles.button }>How it Works</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.navigateToFAQs.bind(this) }>
            <Text style={ styles.button }>FAQs</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 65
  },
  button: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginRight: 70,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#95D500',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center'
  }
});

export default movingandstorage;
