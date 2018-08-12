import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import Display from 'react-native-display';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  navigateToCard(card) {
    this.props.navigator.push({id:'Card', user: this.props.user, card: card, token: this.props.token, division: this.props.division });
  }

  render() {
    var BlendCard = require('../images/blendcard.jpg');
    var ArtStreetCard = require('../images/artstreetcard.jpg');
    var JuryBoxCard = require('../images/juryboxcard.jpg');
    var GalleyCard = require('../images/galleycard.jpg');
    var StusCard = require('../images/stuscard.jpg');
    var ChillCard = require('../images/chillcard.jpg');
    var HeritageCard = require('../images/blankcard.jpg');

    var CardImg;

    if(this.props.division.name == 'The Blend' || this.props.division.name == 'The Blend Express') {
      CardImg = BlendCard;
    } else if(this.props.division.name == 'ArtStreet Cafe') {
      CardImg = ArtStreetCard;
    } else if(this.props.division.name == 'The Jury Box') {
      CardImg = JuryBoxCard;
    } else if(this.props.division.name == 'The Galley') {
      CardImg = GalleyCard;
    } else if(this.props.division.name == 'Stuarts Landing') {
      CardImg = StusCard;
    } else if(this.props.division.name == 'The CHILL') {
      CardImg = ChillCard;
    } else if(this.props.division.name == 'Heritage Coffeehouse') {
      CardImg = HeritageCard;
    }

    var c = false;
    if(this.props.card.usercards[0]) {
      c = true;
    }

    console.log(this.props.division)

    if(c) {
      return (

        <View>
          <TouchableOpacity onPress={this.navigateToCard.bind(this, this.props.card)}>
            <View style={styles.card}>
              <Image style={styles.image} source={CardImg} />
              <View style={styles.textContainer}>
                <Text style={styles.textBold}>{this.props.card.name}</Text>
                <Text style={styles.text}>{this.props.division.name}</Text>
                <Text style={styles.textBold}>{this.props.card.total - this.props.card.usercards[0].points} punches until next reward</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      );
    } else {
      return (

        <View>
          <TouchableOpacity onPress={this.navigateToCard.bind(this, this.props.card)}>
            <View style={styles.card}>
              <Image style={styles.image} source={CardImg} />
              <View style={styles.textContainer}>
                <Text style={styles.textBold}>{this.props.card.name}</Text>
                <Text style={styles.text}>{this.props.division.name}</Text>
                <Text style={styles.textBold}>{this.props.card.total} punches until next reward</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      );
    }


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
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width - 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'avenir', fontWeight: 'bold',
    fontSize: 16,
    marginTop: -6,
    marginBottom: 10
  }
});

export default Card;
