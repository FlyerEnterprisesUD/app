import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ApprovePush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      pushs: []
    };
    this.getApproves = this.getApproves.bind(this);
  }

  componentWillMount() {
    this.getApproves();
  }

  async getApproves() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getapprovespush';
    //var url = 'http://localhost:5000/auth/getapprovespush';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token
        })
      });

      let responseJson = await response.json();

      this.setState({ pushs: responseJson.response.pushs });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getApproves().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToEditSubmit(push) {
    this.props.navigator.push({id: 'EditSubmit Push', user: this.props.user, token: this.props.token, push: push});
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
            this.state.pushs.map((l, i) => (

                <ListItem
                  key={i}
                  title={l.title}
                  onPress={this.navigateToEditSubmit.bind(this, l)}
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

export default ApprovePush;
