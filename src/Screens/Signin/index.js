import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useInput} from '../../utils/useInput';
import axios from 'axios';
import react from 'react';

function renderPhoneIcon() {
  return <Icon name="phone" style={styles.IconStyle} />;
}

export function SignInScreen(props) {
  const {navigation} = props;
  const [isLoading, setIsLoading] = react.useState(false);

  const [input, changeInput] = useInput('', [{key: 'isPhone'}]);

  const doneHandler = () => {
    if (input.isValid) {
      //api request
      setIsLoading(true);
      axios
        .post('/verify', {phone: input.value})
        .then((res) => {
          navigation.navigate('ConfirmationCodeScreen');
        })
        .catch((err) => {})
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    // Enter your Phone Number style:
    <View style={styles.container}>
      <View style={styles.mianTextWrapper}>
        <Text style={styles.mianText}>Enter your Phone Number</Text>
      </View>

      <View style={styles.InputWrapper}>
        <Input
          // Phone Style:
          underlined
          placeholder="Phone                              "
          WrapperStyle={styles.WrapperStyle}
          onChangeText={changeInput}
          keyboardType="numeric"
          onSubmitEditing={doneHandler}
          // Phone Icon :
          renderIconLeft={renderPhoneIcon}
        />
      </View>
      <View style={styles.ButtonWrapperStyle}>
        <AppButton
          title="Done"
          titleStyle={styles.ButtonStyle}
          onPress={doneHandler}
          disabled={!input.isValid}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
