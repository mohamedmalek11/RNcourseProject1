import React from 'react';
import {View} from 'react-native';
import {WelcomeScreenMainButton} from './WelcomeScreenMainButton';
import {WelcomeScreenMainText} from './WelcomeScreenMainText';
import styles from './styles';

export class WelcomeScreen extends React.Component {
  render() {
    return (
      <View >
        <View style={styles.wrapper}>
          <WelcomeScreenMainText />
        </View>
        <View style={styles.wrapper}>
        <WelcomeScreenMainButton />
        </View>
      </View>
    );
  }
}