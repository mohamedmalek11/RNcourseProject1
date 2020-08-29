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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {AppButton} from './src/components/appButton';
import {Counter} from './src/components/PlayAround/FunctionalCounter';
import {AddToCartButtun} from './src/components/AddToCartButtun';
import {Timer} from './src/components/Timer';
import {CounterCounter} from './src/components/PlayAround/Counter2';
import {SignUpScreen} from './src/components/PlayAround/ResponsiveLayout';
import {Input} from './src/components/input';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 50}}>
        <Input placeholder="Email" underlined  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
