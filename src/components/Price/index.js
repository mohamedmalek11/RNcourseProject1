import React from 'react';
import {View, Text, Vibration} from 'react-native';
import {getActualPrice} from '../../utils/helperFunctions';
import {CURENCY} from '../../utils/Constants'
import styles from './style';

export function Price(props) {
  const {price, discount} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{getActualPrice(price, discount)}{CURENCY}</Text>

      {discount && <Text style={styles.oldPrice}>{price}{CURENCY}</Text>}
    </View>
  );
}
