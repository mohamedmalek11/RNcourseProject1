/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {AppContainer} from './src/Navigation/index';

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
