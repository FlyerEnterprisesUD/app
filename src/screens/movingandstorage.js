import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import MovingAndStorageHome from './MovingAndStorageHome';
import QA from './QA';

class MovingAndStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  componentWillMount() {
    this.getQuestions();
  }

  async getQuestions() {
    var url = 'https://flyerentapi.herokuapp.com/division/getqas';
    //var url = 'http://localhost:3000/division/getqas';

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();

      this.setState({ questions: responseJson.response.qas });

      return responseJson;
    } catch (err) {
      console.error(err);
    }
  }

  render() {

    return(
      <ScrollableTabView
       style={{marginTop: 65, backgroundColor: '#FFFFFF' }}
       tabBarActiveTextColor='#CC0F40'
       tabBarUnderlineStyle={{backgroundColor: '#CC0F40'}}
       initialPage={0}
       renderTabBar={() => <ScrollableTabBar />}
     >
       <MovingAndStorageHome tabLabel='Home' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } {...this.props.passProps} />
       <QA tabLabel='FAQs' navigator={ this.props.navigator } toggleSideMenu={ this.props.toggleSideMenu } user={ this.props.user } token={ this.props.token } questions={this.state.questions} division='Moving And Storage' {...this.props.passProps} />
     </ScrollableTabView>
    );
  }
}

export default MovingAndStorage;
