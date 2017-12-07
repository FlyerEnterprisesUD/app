import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Display from 'react-native-display';
import Products from '../components/Products';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      groups: [],
      menu: true
    };

    this.navigateTo = this.navigateTo.bind(this);
    this.getMenu = this.getMenu.bind(this);
  }

  componentWillMount() {
    this.setState({groups: this.props.division.groups});

    if(this.props.division.groups[0]) {
      this.setState({menu: true});
    } else {
      this.setState({menu: false});
    }
  }

  navigateTo(product) {
    this.props.navigator.push({ id: 'Product', product: product });
  }

  async getMenu() {
    var url = 'https://flyerentapi.herokuapp.com/menu/get';
    //var url = 'http://localhost:3000/menu/get';

    console.log(this.props.division);

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          divisionId: this.props.division.division.id
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == false) {
        console.log("Fdajnod")
      }

      console.log(responseJson.response);

      this.setState({ groups: responseJson.response.products });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getMenu().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >

          <Display enable={this.state.menu}>
          {
            this.state.groups.map((l, i) => (
              <Products navigator={this.props.navigator} group={l} key={i} />
            ))
          }
          </Display>

          <Display enable={!this.state.menu}>
            <Text style={styles.no}>There is no menu for this division.</Text>
          </Display>

        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  no: {
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default Menu;
