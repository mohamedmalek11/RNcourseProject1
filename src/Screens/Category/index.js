import React from 'react';
import {View, Text} from 'react-native';

import {Product} from '../../components/Product';
import {dummyProduct, dummyProductWithDiscount} from '../../utils/dummyData';
import styles from './style';

export function CategoryScreen(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.HeaderTitle}>Products</Text>
        <Product product={dummyProductWithDiscount} />
      </View>
    </View>
  );
}
