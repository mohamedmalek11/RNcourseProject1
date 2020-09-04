import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Input} from '../../components/input';
import {AppButton} from '../../components/AppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

function renderPhoneIcon() {
  return <Icon name="phone" style={styles.IconStyle} />;
}

export function SignInScreen(props) {
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
          // Phone Icon :
          renderIconLeft={renderPhoneIcon}
        />
      </View>
      <View style={styles.ButtonWrapperStyle}>
        <AppButton title="done" WrapperStyle={styles.ButtonStyle} />
      </View>
    </View>
  );
}
