import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export function Price(props) {
  const {price, discount} = props;

  return (
    <View>
      <Text>{price}</Text>
    </View>
  );
}
