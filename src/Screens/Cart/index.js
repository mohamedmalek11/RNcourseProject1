import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {CartItems} from '../../components/CartItems';
import {AppButton} from '../../components/AppButton';
import {dummycartItems} from '../../utils/dummyData';
import styles from './style';

function renderCartItem({item}) {
  return <CartItems cartItem={item} />;
}

function renderCartItems(cartItems) {
  return <FlatList data={cartItems} renderItem={renderCartItem} />;
}

export function CartScreen(props) {
  return (
    <View style={styles.container}>
      {renderCartItems(dummycartItems)}

      <View style={styles.wrapper}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalText}>Total = 540 $</Text>
          <AppButton title="CHECK OUT" titleStyle={styles.buttonText} />
        </View>
      </View>
    </View>
  );
}
