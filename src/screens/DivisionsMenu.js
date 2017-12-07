import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DivisionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      divisions: []
    };
    this.getDivisions = this.getDivisions.bind(this);
  }

  componentWillMount() {
    this.getDivisions();
  }

  async getDivisions() {
    var url = 'https://flyerentapi.herokuapp.com/division/getall';
    //var url = 'http://localhost:3000/division/getall';

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

      this.setState({ divisions: responseJson.response.divisions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.getDivisions().then(() => {
      this.setState({refreshing: false});
    });
  }

  navigateToDivisions(division) {
    this.props.navigator.push({id:'Division Menu', user: this.props.user, division: division, token: this.props.token });
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
          <View>
          <Text style={{marginTop: 10, marginLeft: 16, color: '#515151', fontFamily: 'avenir', fontWeight: 'bold',  fontSize: 16 }}>Divisions</Text>
          {
            this.state.divisions.map((l, i) => (
              <View key={i}>
              <TouchableOpacity onPress={this.navigateToDivisions.bind(this, l)}>
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

export default DivisionsMenu;
