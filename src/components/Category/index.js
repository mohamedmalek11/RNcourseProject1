import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';

export function Category(props) {
  const {category} = props;
  return (
    <View style={styles.container}>
    
      <View style={styles.imageWrapper}>
        <Image source = {{uri: category.imageUrl}} />
      </View>
      <View style={styles.textWrapper}>
        <Text>{category.title}</Text>
      </View>
    </View>
  );
}
