import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './style';

export function AdressScreen(props) {
  return (
    <View style={styles.container}>
      <Input
        stacked
        placeholder="Name"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      <Input
        stacked
        placeholder="Phone"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      <Input
        stacked
        placeholder="City"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      <Input
        stacked
        placeholder="Area"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      <Input
        stacked
        placeholder="Street"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      <Input
        stacked
        placeholder="Building"
        placeholderColore="#aaa"
        placeholderSize={17}
        style={styles.placeholderstyle}
        WrapperStyle = {styles.InputWrapperStyle}
        underlinedColore = '#dddddd'
      />
      
      <View style={styles.buttonWrapper}>
        <AppButton title="Add Adress" titleStyle={styles.titleStyle} />
      </View>
    </View>
  );
}
