import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, Navigator } from 'react-native';

class DivisionBubbles extends Component {
  constructor() {
    super();
  }

  navigateToMovingAndStorage() {
    this.props.navigator.resetTo({id:'Moving And Storage', user: this.props.user, token: this.props.token });
  }

  async getChill() {
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
          divisionId: 2,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'The Chill', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getHeritage() {
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
          divisionId: 82,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'Heritage Coffeehouse', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getStus() {
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
          divisionId: 62,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'Stuart\'s Landing', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getGalley() {
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
          divisionId: 32,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'The Galley', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendExpress() {
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
          divisionId: 22,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'The Blend Express', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlend() {
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
          divisionId: 12,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'The Blend', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getArtStreet() {
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
          divisionId: 52,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'Art Street Cafe', user: this.props.user, token: this.props.token, division: responseJson.response });
      }


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getJuryBox() {
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
          divisionId: 42,
        })
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true) {
        this.props.navigator.resetTo({id:'Jury Box', user: this.props.user, token: this.props.token, division: responseJson.response });
      }

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const chill = require('../images/chill.jpg');
    const blend = require('../images/blend.jpg');
    const blendexpress = require('../images/blendexpress.jpg');
    const galley = require('../images/galley.jpg');
    const artstreetcafe = require('../images/artstreetcafe.jpg');
    const jurybox = require('../images/jurybox.jpg');
    const stuslanding = require('../images/stuslanding.jpg');
    const heritage = require('../images/HeritageLogo.png');
    const movingandstorage = require('../images/movingandstorage.jpg');

    return(
      <View style={{backgroundColor:'#F2F2F2'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>

          <TouchableOpacity onPress={this.getChill.bind(this)}>
          <Image
            source={chill}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getArtStreet.bind(this)}>
          <Image
            source={artstreetcafe}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getBlend.bind(this)}>
          <Image
            source={blend}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getBlendExpress.bind(this)}>
          <Image
            source={blendexpress}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getJuryBox.bind(this)}>
          <Image
            source={jurybox}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getGalley.bind(this)}>
          <Image
            source={galley}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getStus.bind(this)}>
            <Image
              source={stuslanding}
              style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getHeritage.bind(this)}>
            <Image
              source={heritage}
              style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToMovingAndStorage.bind(this)}>
            <Image
              source={movingandstorage}
              style={styles.image} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  image: {
    height:64,
    width: 64,
    borderRadius: 32,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8
  }
});

export default DivisionBubbles;
