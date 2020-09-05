import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {Category} from '../../components/Category';
import {dummyProducts, dummyCategories} from '../../utils/dummyData';
import {ProductsList} from '../../components/ProductsList';
import styles from './style';

function renderCategory({item}) {
  return <Category category={item} />;
}

function renderCategoriesList(categories) {
  return (
    <FlatList data={categories} renderItem={renderCategory} horizontal={true} />
  );
}

export function HomeScreen(props) {
  return (
    <ScrollView style={styles.Container}>
      <View>
        <Text style={styles.HeaderTitle}>Categories</Text>
        {renderCategoriesList(dummyCategories)}
      </View>
      <View>
        <Text style={styles.HeaderTitle}>Products</Text>
        <ProductsList data = {dummyProducts} />
      </View>
    </ScrollView>
  );
}
