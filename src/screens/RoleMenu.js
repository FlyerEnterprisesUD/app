import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RoleMenu extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSubmitPromotion(product) {
    this.props.navigator.push({ id: 'Submit', user: this.props.user, token: this.props.token });
  }

  navigateToApprovePromotion(product) {
    this.props.navigator.push({ id: 'Approve', user: this.props.user, token: this.props.token });
  }

  render() {
    if(this.props.user.role == 'admin') {
      return(
        <ScrollView style={styles.container}>
          <ListItem
            key={0}
            title={'Submit Push Notification'}
          />
          <ListItem
            key={1}
            title={'Approve Push Notification'}
          />
          <ListItem
            key={2}
            onPress={this.navigateToSubmitPromotion.bind(this)}
            title={'Submit Promotion'}
          />
          <ListItem
            key={3}
            onPress={this.navigateToApprovePromotion.bind(this)}
            title={'Approve Promotion'}
          />
          <ListItem
            key={4}
            title={'Add Card'}
          />
          <ListItem
            key={5}
            title={'Edit Card'}
          />
          <ListItem
            key={6}
            title={'Change User Role'}
          />
        </ScrollView>
      );
    } else if(this.props.user.role == 'approver') {
      return(
        <ScrollView style={styles.container}>
          <ListItem
            key={0}
            title={'Submit Push Notification'}
          />
          <ListItem
            key={1}
            title={'Approve Push Notification'}
          />
          <ListItem
            key={2}
            onPress={this.navigateToSubmitPromotion.bind(this)}
            title={'Submit Promotion'}
          />
          <ListItem
            key={3}
            onPress={this.navigateToApprovePromotion.bind(this)}
            title={'Approve Promotion'}
          />
        </ScrollView>
      );
    } else {
      return(
        <ScrollView style={styles.container}>
          <ListItem
            key={0}
            title={'Submit Push Notification'}
          />
          <ListItem
            key={1}
            onPress={this.navigateToSubmitPromotion.bind(this)}
            title={'Submit Promotion'}
          />
        </ScrollView>
      );
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  }
});

export default RoleMenu;
