import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/input';
import {AppButton} from '../../components/AppButton';

export function ConfirmationCodeScreen(props) {
  return (
    // Enter Confirmation Code style:
    <View style={styles.container}>
      <View style={styles.mianTextWrapper}>
        <Text style={styles.mianText}>Enter Confirmation Code</Text>
      </View>

      <View style={styles.InputWrapper}>
        <Input
          // Confirm Input Style:
          borderd
          placeholder="___ ___ ___ ___"
          placeholderPosition="center"
          WrapperStyle={styles.WrapperStyle}
        />
      </View>
      <View style={styles.ButtonWrapperStyle}>
        <AppButton
          title="Confirm"
          WrapperStyle={styles.ButtonStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
}
