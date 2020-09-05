import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from '../Card';
import {AddToCartButtun} from '../AddToCartButtun';
import {Price} from '../Price';
import styles from './style';

export function Order(props) {
  const {order} = props;
    const firstCartItem = order.cartItems[0];
  return (
    <Card style={styles.container}>
      <Image source={{uri: firstCartItem.product.imageUrl}} style={styles.image} />
      <View style={styles.CartContent}>
        <Text style={styles.title}>{firstCartItem.product.title}</Text>
        <Price price={order.cost} />
        <View style = {styles.statusWrapper}>
        <Text style = {styles.statusText}>{order.status}</Text>
        </View>
       
      </View>
    </Card>
  );
}
