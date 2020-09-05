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

import {AccountScreen} from './src/Screens/Account';

class App extends React.Component {
  render() {
    return <AccountScreen />;
  }
}

export default App;
