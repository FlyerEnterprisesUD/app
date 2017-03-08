import React, { Component } from 'react';
import { View, StyleSheet, Image, Navigator, VibrationIOS, TouchableOpacity, Text, Dimensions } from 'react-native';

import Camera from 'react-native-camera';

var QRCodeScreen = React.createClass({

  propTypes: {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSuccess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      cancelButtonVisible: false,
      cancelButtonTitle: 'Cancel',
    };
  },

  _onPressCancel: function() {
    var $this = this;
    requestAnimationFrame(function() {
      $this.props.navigator.pop();
      if ($this.props.onCancel) {
        $this.props.onCancel();
      }
    });
  },

  _onBarCodeRead: function(result) {
    var $this = this;

    if (this.barCodeFlag) {
      this.barCodeFlag = false;

      setTimeout(function() {
        VibrationIOS.vibrate();
        $this.onSuccess(result.data);
      }, 1000);
    }
  },

  onSuccess: function(result) {
    this.punch(result);
    this.props.navigator.pop();
  },

  async punch(result) {
    //var url = 'https://flyerenterprisesmobileapp.herokuapp.com/user/test';
    //var url = 'http://localhost:5000/user/test';

    try {
      let response = await fetch(result, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let responseJson = await response.json();

      if(responseJson.response.success == true)
        this.props.navigator.replace({id: 'The Chill', user: this.props.user});

    } catch (err) {
      console.error(err);
    }
  },

  render: function() {
    this.barCodeFlag = true;

    const cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;

    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        {cancelButton}
      </Camera>
    );
  },
});

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  camera: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});

export default QRCodeScreen;
