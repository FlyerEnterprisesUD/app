import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import MovingAndStorageHome from './MovingAndStorageHome';
import QA from './QA';
import Promotions from './Promotions';

class MovingAndStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      promotions: []
    };

    this.getPromotions = this.getPromotions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentWillMount() {
    this.getPromotions();
    this.getQuestions();
  }

  async getQuestions() {
    //var url = 'https://flyerenterprisesmobileapp.herokuapp.com/movingandstorage';
    var url = 'http://localhost:5000/movingandstorage';

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();

      this.setState({ questions: responseJson.about.faqs });

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
          division: "Moving And Storage"
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
    var test = [];

    return(
      <ScrollableTabView
       style={{marginTop: 65, backgroundColor: '#FFFFFF' }}
       tabBarActiveTextColor='#CC0F40'
       tabBarUnderlineStyle={{backgroundColor: '#CC0F40'}}
       initialPage={0}
       renderTabBar={() => <ScrollableTabBar />}
     >
       <MovingAndStorageHome tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } {...this.props.passProps} />
       <Promotions tabLabel='Promotions' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } promotions={this.state.promotions} division='Moving And Storage' {...this.props.passProps} />
       <QA tabLabel='FAQs' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } questions={this.state.questions} division='Moving And Storage' {...this.props.passProps} />
     </ScrollableTabView>
    );
  }
}

export default MovingAndStorage;
