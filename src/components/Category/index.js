import React from 'react';
import {Text, View, Image} from 'react-native';
import {Card} from '../Card'
import styles from './style';
import { verticalScale } from 'react-native-size-matters';

export function Category(props) {
  const {category} = props;
  return (
    <View style={styles.container}>
    
      <View style={styles.imageWrapper}>
      <Card>
      <Image style = {styles.imageStyle}  source = {{uri: category.imageUrl}} />
      </Card>
        
      </View>
      <View style={styles.titletWrapper}>
        <Text style = {styles.categoryTitle} >{category.title}</Text>
      </View>
    </View>
  );
}
