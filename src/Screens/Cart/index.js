import React from 'react';
import {View, Text} from 'react-native';
import {CartItems} from '../../components/CartItems';
import {AppButton} from '../../components/AppButton';
import {cartItem} from '../../utils/dummyData';
import styles from './style';

export function CartScreen(props) {
  return (
    <View style={styles.container}>
      <CartItems cartItem={cartItem} />
      <View style = {styles.wrapper}>
        <View style={styles.totalWrapper}>
          <Text style = {styles.totalText}>Total = 5325 $</Text>
          <AppButton title="CHECK OUT" titleStyle ={styles.buttonText} />
        </View>
      </View>
    </View>
  );
}
