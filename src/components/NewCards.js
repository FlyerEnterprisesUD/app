import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';

class NewCards extends Component {
  constructor(props) {
    super(props);
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token });
  }

  render() {
    var BlendCard = require('../images/blendcard.jpg');
    var ArtStreetCard = require('../images/artstreetcard.jpg');
    var JuryBoxCard = require('../images/juryboxcard.jpg');
    var GalleyCard = require('../images/galleycard.jpg');
    var StusCard = require('../images/stuscard.jpg');
    var ChillCard = require('../images/chillcard.jpg');

    var CardImg;

    if(this.props.division == 'The Blend' || this.props.division == 'The Blend Express') {
      CardImg = BlendCard;
    } else if(this.props.division == 'ArtStreet Cafe') {
      CardImg = ArtStreetCard;
    } else if(this.props.division == 'The Jury Box') {
      CardImg = JuryBoxCard;
    } else if(this.props.division == 'The Galley') {
      CardImg = GalleyCard;
    } else if(this.props.division == 'Stuarts Landing') {
      CardImg = StusCard;
    } else if(this.props.division == 'The CHILL') {
      CardImg = ChillCard;
    }

    return (
      <View>
      {
        this.props.cards.map((l, i) => (
          <TouchableOpacity key={i} onPress={this.navigateToCard.bind(this, l)}>
            <View style={styles.card}>
              <Image style={styles.image} source={CardImg} />
              <View style={styles.textContainer}>
                <Text style={styles.textBold}>{l.name}</Text>
                <Text style={styles.text}>{l.division}</Text>
                <Text style={styles.textBold}>{l.total} punches until next reward</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  card: {
    borderColor: '#D3D3D3',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    height: 120
  },
  textContainer: {
    marginLeft: 20,
    marginTop: -100,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  textBold: {
    color: '#FFFFFF',
    fontFamily:'LabradorA-Bold',
    fontSize: 26
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width - 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily:'LabradorA-Regular',
    fontSize: 20,
    marginTop: -6,
    marginBottom: 10
  }
});

export default NewCards;
