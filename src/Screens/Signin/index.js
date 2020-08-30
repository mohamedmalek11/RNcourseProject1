import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/input';
import {AppButton} from '../../components/appButton';

export function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mianTextWrapper}>
        <Text style={styles.mianText}>Enter your Phone Number</Text>
      </View>

      <View style={styles.InputWrapper}>
        <Input
          underlined
          placeholder="Phone"
          WrapperStyle={styles.WrapperStyle}
        />
      </View>
      <View style = {styles.ButtonWrapperStyle}>
          <AppButton  title = "done" WrapperStyle = {styles.ButtonStyle}/>
      </View>
    </View>
  );
}
