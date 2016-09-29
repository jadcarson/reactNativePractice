// Place code in here for Android.

// Import a library to help create a component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//Create a component

const App = () => (
  <Header headerText={'Albums'} />
  );

//render it to device
AppRegistry.registerComponent('albums', () => App);
