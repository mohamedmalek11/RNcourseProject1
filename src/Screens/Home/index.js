import React from 'react';
import {View, Text} from 'react-native';
import {Category} from '../../components/Category';
import {Product} from '../../components/Product';
import {dummyProductWithDiscount, dummyProduct, dummyCategory} from '../../utils/dummyData'
import styles from './style';

export function HomeScreen (props) {
    return(
        <View style = {styles.Container}>
            <View>
            <Text style ={styles.HeaderTitle}>Categories</Text>
                <Category category = {dummyCategory} />
            </View>
            <View>
            <Text style ={styles.HeaderTitle}>Products</Text>
            <Product product = {dummyProductWithDiscount} />
            </View>

        </View>
    );
};