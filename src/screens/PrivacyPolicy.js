import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollView style={ styles.container }>
        <Text style={ styles.bold }>
          Welcome to the Flyer Enterprises Privacy Policy
        </Text>
        <Text style={ styles.text }>
          When you use the Flyer Enterprises App, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.
        </Text>
        <Text style={ styles.bold }>
          Privacy Policy
        </Text>
        <Text style={ styles.text }>
          There are many ways that you can use the Flyer Enterprises Application. You can browse menus, hours, and locations, or even manage your loyalty cards for all divisions in one place. When you share your information with us, for example, by filling out the Account Information, we can make those services even better by tailoring them to your specific needs. We want to be clear about how we’re using that information.
        </Text>
        <Text style={ styles.text }>
          Our Privacy Policy explains:
        </Text>
        <Text style={ styles.indent }>
          What information we collect and why we collect it
        </Text>
        <Text style={ styles.indent }>
          How we use that information
        </Text>
        <Text style={ styles.indent }>
          The choices we offer, including how to access and information
        </Text>
        <Text style={ styles.bold }>
          How We Collect and Use Information
        </Text>
        <Text style={ styles.text }>
          When giving information to Flyer Enterprises, you can be assured that your information is being safely stored using best practices and the highest encryption. Information given to Flyer Enterprises will never be distributed outside Flyer Enterprises and will be used to better tailor the app to you, the user.
        </Text>
        <Text style={ styles.text }>
          We collect information in the following ways:
        </Text>
        <Text style={ styles.text }>
          Information given to us by the user
        </Text>
        <Text style={ styles.indent }>
          By giving information to us, you allow us to give you the full experience of the Flyer Enterprises App. This includes features such as loyalty cards and user specific promotions. Information we may ask you for includes a username and password, along with optional information such as birthday, location, and other demographic data.
        </Text>
        <Text style={ styles.text }>
          Information we acquire
        </Text>
        <Text style={ styles.indent }>
          By downloading the app, we receive information relating to your physical device. Information includes but is not limited to, Location, Device ID, and Push Notification ID. All of this information is only acquired after the user accepts that we may obtain it.
        </Text>
        <Text style={ styles.bold }>
          Transparency and Choice
        </Text>
        <Text style={ styles.text }>
          People have different privacy concerns. Our goal is to be clear about what information we collect, so that you can make meaningful choices about how it is used. Users may use the app as a guest, thus requiring no information on that user.
        </Text>
        <Text style={ styles.bold }>
          Information Security
        </Text>
        <Text style={ styles.text }>
          All information Flyer Enterprises receives is safely stored using the latest security standards. No persons without explicit authorization will be allowed to view the information. Our backend service is encrypted with SSL certification and uses 2 Factor Authentication.
        </Text>
        <Text style={ styles.bold }>
          Changes
        </Text>
        <Text style={ styles.text }>
          Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page. We will also keep prior versions of this Privacy Policy in an archive for your review.
        </Text>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 65
  },
  text: {
    fontFamily:'LabradorA-Regular',
    fontSize: 20,
    color:'#939393',
    marginTop: 5,
    marginLeft: 5
  },
  bold: {
    fontFamily:'LabradorA-Bold',
    fontSize: 22,
    color:'#939393',
    marginTop: 5,
    marginLeft: 5
  },
  indent: {
    fontFamily:'LabradorA-Regular',
    fontSize: 20,
    color:'#939393',
    marginTop: 5,
    marginLeft: 10
  }
});

module.exports = PrivacyPolicy;
