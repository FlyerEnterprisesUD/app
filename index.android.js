import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

// Create the app from the app component
const app = () => (
  <App />
);

AppRegistry.registerComponent('app', () => app);
