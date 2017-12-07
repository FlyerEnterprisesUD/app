import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Division from './Division';
import Menu from './Menu';
import Promotions from './Promotions';
import Cards from './Cards';

class Galley extends Component {
  constructor(props) {
    super(props);
    this.state = {
      division: {},
    };

    this.getCards = this.getCards.bind(this);
  }

  componentWillMount() {
    console.log(this.props.division);
    if(this.props.user.username != "Guest") {
      this.getCards();
    }
  }

  async getCards() {
    var url = 'https://flyerentapi.herokuapp.com/card/get';
    //var url = 'http://localhost:3000/card/get';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.props.user.id,
          divisionId: this.props.division.division.id
        })
      });

      let responseJson = await response.json();

      this.setState({ division: responseJson.response.division });

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
         <Division tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } division={ this.props.division } {...this.props.passProps} />
         <Menu tabLabel='Menu' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } division={ this.props.division } {...this.props.passProps} />
         <Promotions tabLabel='Promotions' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } division={ this.props.division } {...this.props.passProps} />
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
       <Division tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } division={ this.props.division } {...this.props.passProps} />
       <Menu tabLabel='Menu' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } division={ this.props.division } {...this.props.passProps} />
       <Promotions tabLabel='Promotions' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } division={ this.props.division } {...this.props.passProps} />
       <Cards tabLabel='Rewards' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } division={ this.state.division } {...this.props.passProps} />
     </ScrollableTabView>
    );
  }
}

export default Galley;
