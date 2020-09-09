import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {Card} from '../Card';
import {Price} from '../Price';
import styles from './style';

export function Product(props) {
  const {product} = props;
  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() => navigation.navigate('ProductScreen')}>
      <View style={styles.imageWrapper}>
        <Card>
          <Image style={styles.imageStyle} source={{uri: product.imageUrl}} />
        </Card>
      </View>
      <View style={styles.titletWrapper}>
        <Text style={styles.ProductTitle}>{product.title}</Text>
        <Price price={product.price} discount={product.discount} />
      </View>
    </PlatformTouchable>
  );
}
