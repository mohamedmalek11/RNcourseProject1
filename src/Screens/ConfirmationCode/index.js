import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import axios from 'axios';
import {useInput} from '../../utils/useInput';
import react from 'react';

export function ConfirmationCodeScreen(props) {
  const [input, changeInput] = useInput('', [{key: 'isConfimationCode'}]);
  const [isLoading, setIsLoading] = react.useState(false);
  const {phone} = props.route.params;

  const ConfirmHandler = () => {
    if (input.isValid) {
      //Api request
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone, code: input.value})
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
          setIsLoading(false);
        });
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
          isLoading={isLoading}
          disabled={!input.isValid}
        />
      </View>
    </View>
  );
}
