import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      promotions: []
    };
    this.getPromotions = this.getPromotions.bind(this);
  }

  componentWillMount() {
    this.getPromotions();
  }

  async getPromotions() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/getpromotions';
    //var url = 'http://localhost:5000/getpromotions';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          division: this.props.division
        })
      });

      let responseJson = await response.json();

      this.setState({ promotions: responseJson.response.promotions });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getPromotions().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToPromotion(promotion) {
    this.props.navigator.push({id: 'Promotion', user: this.props.user, token: this.props.token, promotion: promotion});
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
          <List containerStyle={{marginTop: 0}}>
          {
            this.state.promotions.map((l, i) => (

                <ListItem
                  key={i}
                  title={l.title}
                  onPress={this.navigateToPromotion.bind(this, l)}
                  subtitle={l.division}
                />

            ))
          }
          </List>
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
  }
});

export default Promotions
