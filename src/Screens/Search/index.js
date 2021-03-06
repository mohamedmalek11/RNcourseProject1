import React from 'react';
import {View,SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

function renderIconSearch() {
  return <Icon name="search" style={styles.SearchIcon} />;
}

export function SearchScreen(props) {
  return (
    <SafeAreaView style={styles.Container}>
    <View style={styles.Container}>
      <Input
        borderd
        placeholder="Search Here..."
        renderIconRight={renderIconSearch}
        IconWrapperStyle={styles.IconWrapper}
        style = {styles.placeholder}
      />
    </View>
    </SafeAreaView>
  );
}
