import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, Navigator } from 'react-native';

class DivisionBubbles extends Component {
  constructor() {
    super();
    this.state = {
      ArtStreetAbout: {},
      BlendAbout: {},
      BlendExpressAbout: {},
      ChillAbout: {},
      GalleyAbout: {},
      JuryBoxAbout: {},
      StusAbout: {}
    };

    this.getArtStreetInfo = this.getArtStreetInfo.bind(this);
    this.getBlendInfo = this.getBlendInfo.bind(this);
    this.getBlendExpressInfo = this.getBlendExpressInfo.bind(this);
    this.getChillInfo = this.getChillInfo.bind(this);
    this.getGalleyInfo = this.getGalleyInfo.bind(this);
    this.getJuryBoxInfo = this.getJuryBoxInfo.bind(this);
    this.getStusInfo = this.getStusInfo.bind(this);
  }

  navigateToChill() {
    this.props.navigator.resetTo({id:'The Chill', user: this.props.user, token: this.props.token, about: this.state.ChillAbout });
  }

  navigateToStusLanding() {
    this.props.navigator.resetTo({id:'Stuart\'s Landing', user: this.props.user, token: this.props.token, about: this.state.StusAbout });
  }

  navigateToArtStreetCafe() {
    this.props.navigator.resetTo({id:'Art Street Cafe', user: this.props.user, token: this.props.token, about: this.state.ArtStreetAbout });
  }

  navigateToBlend() {
    this.props.navigator.resetTo({id:'The Blend', user: this.props.user, token: this.props.token, about: this.state.BlendAbout });
  }

  navigateToBlendExpress() {
    this.props.navigator.resetTo({id:'The Blend Express', user: this.props.user, token: this.props.token, about: this.state.BlendExpressAbout });
  }

  navigateToGalley() {
    this.props.navigator.resetTo({id:'The Galley', user: this.props.user, token: this.props.token, about: this.state.GalleyAbout });
  }

  navigateToJuryBox() {
    this.props.navigator.resetTo({id:'Jury Box', user: this.props.user, token: this.props.token, about: this.state.JuryBoxAbout });
  }

  navigateToMovingAndStorage() {
    this.props.navigator.resetTo({id:'Moving And Storage', user: this.props.user, token: this.props.token, about: this.state.MovingAndStorageAbout });
  }

  componentWillMount() {
    this.getArtStreetInfo();
    this.getBlendInfo();
    this.getBlendExpressInfo();
    this.getChillInfo();
    this.getGalleyInfo();
    this.getJuryBoxInfo();
    this.getStusInfo();
  }

  async getArtStreetInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/artstreet';
    //var url = 'http://localhost:5000/artstreet';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ ArtStreetAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blend';
    //var url = 'http://localhost:5000/blend';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ BlendAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getBlendExpressInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/blendexpress';
    //var url = 'http://localhost:5000/blendexpress';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ BlendExpressAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getChillInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/chill';
    //var url = 'http://localhost:5000/chill';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ ChillAbout: responseJson.about });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getGalleyInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/galley';
    //var url = 'http://localhost:5000/galley';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ GalleyAbout: responseJson.about });


      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getJuryBoxInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/jurybox';
    //var url = 'http://localhost:5000/jurybox';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ JuryBoxAbout: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getStusInfo() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/stuslanding';
    //var url = 'http://localhost:5000/stuslanding';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();
      this.setState({ StusAbout: responseJson.about });

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
    const movingandstorage = require('../images/movingandstorage.jpg');

    return(
      <View style={{backgroundColor:'#F2F2F2'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>

          <TouchableOpacity onPress={this.navigateToChill.bind(this)}>
          <Image
            source={chill}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToArtStreetCafe.bind(this)}>
          <Image
            source={artstreetcafe}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToBlend.bind(this)}>
          <Image
            source={blend}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToBlendExpress.bind(this)}>
          <Image
            source={blendexpress}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToJuryBox.bind(this)}>
          <Image
            source={jurybox}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToGalley.bind(this)}>
          <Image
            source={galley}
            style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToStusLanding.bind(this)}>
            <Image
              source={stuslanding}
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
