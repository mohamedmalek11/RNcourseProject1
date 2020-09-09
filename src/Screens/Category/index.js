import React from 'react';
import {View, Text} from 'react-native';

import {Product} from '../../components/Product';
import {dummyProduct1} from '../../utils/dummyData';
import styles from './style';

export function CategoryScreen(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.HeaderTitle}>Products</Text>
        <Product product={dummyProduct1} />
      </View>
    </View>
  );
}
