import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Division from './Division';
import Menu from './Menu';
import Promotions from './Promotions';
import Cards from './Cards';

class BlendExpress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      about: {},
      cards: [],
      promotions: []
    };

    this.getInfo = this.getInfo.bind(this);
    this.getPromotions = this.getPromotions.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  componentWillMount() {
    this.getInfo();
    this.getCards();
    this.getPromotions();
  }

  async getInfo() {
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
      this.setState({ menu: responseJson.menu });
      this.setState({ about: responseJson.about });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  async getCards() {
    var url = 'https://flyerenterprisesmobileapp.herokuapp.com/auth/getcards';
    //var url = 'http://localhost:5000/auth/getcards';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.props.token,
          division: "The Blend",
          userId: this.props.user.id
        })
      });

      let responseJson = await response.json();

      this.setState({ cards: responseJson.response.cards });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
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
          division: "The Blend Express"
        })
      });

      let responseJson = await response.json();

      this.setState({ promotions: responseJson.response.promotions });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }


  render() {
    if(this.props.user.username == 'Guest') {
      return(
        <ScrollableTabView
         style={{marginTop: 65, backgroundColor: '#FFFFFF' }}
         tabBarActiveTextColor='#CC0F40'
         tabBarUnderlineStyle={{backgroundColor: '#CC0F40'}}
         initialPage={0}
         renderTabBar={() => <ScrollableTabBar />}
       >
         <Division tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } location={this.state.about.location} hours={this.props.about.hours}  division='The Blend Express' {...this.props.passProps} />
         <Menu tabLabel='Menu' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } menu={ this.state.menu } division='The Blend Express' {...this.props.passProps} />
         <Promotions tabLabel='Promotions' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } promotions={this.state.promotions} division='The Blend Express' {...this.props.passProps} />
       </ScrollableTabView>
      );
    }

    return(
      <ScrollableTabView
       style={{marginTop: 65, backgroundColor: '#FFFFFF' }}
       tabBarActiveTextColor='#CC0F40'
       tabBarUnderlineStyle={{backgroundColor: '#CC0F40'}}
       initialPage={0}
       renderTabBar={() => <ScrollableTabBar />}
     >
       <Division tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } location={this.state.about.location} hours={this.props.about.hours}  division='The Blend Express' {...this.props.passProps} />
       <Menu tabLabel='Menu' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } menu={ this.state.menu } division='The Blend Express' {...this.props.passProps} />
       <Promotions tabLabel='Promotions' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } promotions={this.state.promotions} division='The Blend Express' {...this.props.passProps} />
       <Cards tabLabel='Rewards' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } cards={ this.state.cards } division='The Blend Express' {...this.props.passProps} />
     </ScrollableTabView>
    );
  }
}

export default BlendExpress;
