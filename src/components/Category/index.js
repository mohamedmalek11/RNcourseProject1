import React from 'react';
import {Text, View, Image} from 'react-native';
import {Card} from '../Card';
import {PlatformTouchable} from '../PlatformTouchable';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

export function Category(props) {
  const {category} = props;

  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      TouchableStyle={styles.TouchableStyle}
      onPress={() => navigation.navigate('CategoryScreen')}>
      <View style={styles.imageWrapper}>
        <Card>
          <Image style={styles.imageStyle} source={{uri: category.imageUrl}} />
        </Card>
      </View>
      <View style={styles.titletWrapper}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </PlatformTouchable>
  );
}
