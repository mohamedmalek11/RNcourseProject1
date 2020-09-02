import React from 'react';
import {Text, View, Image} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import styles from './style';

export function Product(props) {
  const {product} = props;
  return (
    <View style={styles.container}>

      <View style={styles.imageWrapper}>
        <Card>
          <Image style={styles.imageStyle} source={{uri: product.imageUrl}} />
        </Card>
      </View>
      <View style={styles.titletWrapper}>
        <Text style = {styles.ProductTitle}>{product.title}</Text>
        <Price price={product.price} discount={product.discount} />
      </View>

    </View>
  );
}
