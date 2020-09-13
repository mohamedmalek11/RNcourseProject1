import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';

export function ConfirmationCodeScreen(props) {
  const [input, changeInput] = useInput('', [{key: 'isConfimationCode'}]);

  const ConfirmHandler = () => {
    if (!input.isValid) {
      alert('The Confirmation Code is not correct');
    }
  };
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
          onChangeText={changeInput}
          keyboardType="numeric"
          onSubmitEditing={ConfirmHandler}
        />
      </View>
      <View style={styles.ButtonWrapperStyle}>
        <AppButton
          title="Confirm"
          WrapperStyle={styles.ButtonStyle}
          titleStyle={styles.titleStyle}
          onPress={ConfirmHandler}
        />
      </View>
    </View>
  );
}
