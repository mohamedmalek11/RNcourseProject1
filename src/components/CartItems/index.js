import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from '../Card';
import {AddToCartButtun} from '../AddToCartButtun';
import {useNavigation} from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {Price} from '../Price';
import styles from './style';

export function CartItems(props) {
  const {cartItem} = props;
  const navication = useNavigation();

  return (
    <Card style={styles.outerStyle}>
      <PlatformTouchable
        style={styles.container}
        onPress={() => navication.navigate('ProductScreen')}>
        <Image source={{uri: cartItem.product.imageUrl}} style={styles.image} />
        <View style={styles.CartContent}>
          <Text style={styles.title}>{cartItem.product.title}</Text>
          <Price
            price={cartItem.product.price}
            discount={cartItem.product.discount}
          />
          <AddToCartButtun />
        </View>
      </PlatformTouchable>
    </Card>
  );
}
