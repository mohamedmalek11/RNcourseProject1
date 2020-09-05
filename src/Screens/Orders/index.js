import React from 'react';
import {View} from 'react-native';
import {Order} from '../../components/Order';
import {dummyOrder} from '../../utils/dummyData';
import styles from './style';

export function OrdersScreen(props) {
  return (
    <View style={styles.container}>
      <Order order={dummyOrder} />
    </View>
  );
}
