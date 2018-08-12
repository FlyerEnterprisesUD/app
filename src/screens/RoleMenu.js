import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RoleMenu extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSubmitPromotion() {
    this.props.navigator.push({ id: 'Submit', user: this.props.user, token: this.props.token });
  }

  navigateToApprovePromotion() {
    this.props.navigator.push({ id: 'Approve', user: this.props.user, token: this.props.token });
  }

  navigateToSubmitPush() {
    this.props.navigator.push({ id: 'Submit Push', user: this.props.user, token: this.props.token });
  }

  navigateToApprovePush() {
    this.props.navigator.push({ id: 'Approve Push', user: this.props.user, token: this.props.token });
  }

  navigateToAddCard() {
    this.props.navigator.push({ id: 'Add Card', user: this.props.user, token: this.props.token });
  }

  navigateToAdminCards() {
    this.props.navigator.push({ id: 'Admin Cards', user: this.props.user, token: this.props.token });
  }

  navigateToDivisionsMenu() {
    this.props.navigator.push({ id: 'Divisions Menu', user: this.props.user, token: this.props.token });
  }

  navigateToAddUserToBundle() {
    this.props.navigator.push({ id: 'AddUserToBundle', user: this.props.user, token: this.props.token });
  }





  navigateToUsers() {
    this.props.navigator.push({ id: 'Users', user: this.props.user, token: this.props.token });
  }


  render() {
    if(this.props.user.role == 'Admin') {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.props.user.role} Settings</Text>
            <TouchableOpacity onPress={this.navigateToSubmitPush.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Push Notification</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToApprovePush.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Approve Push Notification</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToSubmitPromotion.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Promotion</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToApprovePromotion.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Approve Promotion</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToUsers.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Change User Role</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToDivisionsMenu.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Divisions</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToAddUserToBundle.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Add Bundle To User</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    } else if(this.props.user.role == 'Approver') {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.props.user.role} Settings</Text>
            <TouchableOpacity onPress={this.navigateToSubmitPush.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Push Notification</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToApprovePush.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Approve Push Notification</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToSubmitPromotion.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Promotion</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToApprovePromotion.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="bookmark" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Approve Promotion</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    } else if(this.props.user.role == 'Editor') {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.props.user.role} Settings</Text>

            <TouchableOpacity onPress={this.navigateToDivisionsMenu.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="user" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Divisions</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          </View>

        </ScrollView>
      );
    } else {
      return(
        <ScrollView style={styles.container}>

          <View>
            <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>{this.props.user.role} Settings</Text>
            <TouchableOpacity onPress={this.navigateToSubmitPush.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Push Notification</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToSubmitPromotion.bind(this)}>
              <View style={styles.section}>
                <View style={styles.item}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="flag" size={16} color="#CC0F40" style={{marginTop: 6}} />
                    <Text style={{marginTop: 6, marginLeft: 16, fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16, color: '#414141'}}>Submit Promotion</Text>
                  </View>
                  <View>
                    <Icon name="chevron-right" size={16} color="#CC0F40" style={{marginTop: 6}} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    }
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

export default RoleMenu;
