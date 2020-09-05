import React from 'react';
import {View, FlatList} from 'react-native';
import {Order} from '../../components/Order';
import {dummyOrders} from '../../utils/dummyData';
import styles from './style';


function renderOrder({item}) {
  return <Order order = {item} />
}


function renderOrders (orderItem) {
  return <FlatList data = {orderItem} renderItem = {renderOrder} />
}

export function OrdersScreen(props) {
  return (
    <View style={styles.container}>
      {renderOrders(dummyOrders)}
    </View>
  );
}
