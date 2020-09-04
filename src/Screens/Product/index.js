import React from 'react';
import {View, Text, Image} from 'react-native';
import {AddToCartButtun} from '../../components/AddToCartButtun';
import {Price} from '../../components/Price';
import {dummyProductWithDiscount} from '../../utils/dummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

function getProduct(productID) {
  return dummyProductWithDiscount;
}

export function ProductScreen(props) {
  const {productID} = props;
  const product = getProduct(productID);
  return (
    <View style = {styles.Container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.productTitleWrapper}>
        <Icon name="md-arrow-back" style={styles.icon} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style = {styles.ProductDetails}>
          <Price price={product.price} discount={product.discount} />
          <Text style={styles.desciptionText}>Description</Text>
          <Text style={styles.desciptionContent}>{product.desciption}</Text>
        </View>

        <View style={styles.ButtunWrapper}>
          <AddToCartButtun />
        </View>
      </View>
    </View>
  );
}
