import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import styles from './style';
import {CURENCY} from '../../utils/Constants'

function renderOrderCostRow(key, value) {
  return (
    <View style={styles.renderOrderCostRow}>
      <Text style={styles.orderCostKey}>{key}</Text>
      <Text style={styles.orderCostValue}>{value}</Text>
    </View>
  );
}

function renderAdressSection() {
  return (
    <View style={styles.shipToContainer}>
      <Text style={styles.shipToText}>Ship To:</Text>
      <Text style={styles.Adress}>
        {'Egypt, Cairo, 6 of October, Street 6'}
      </Text>
      <View style={styles.updateButtonWrapper}>
        <Text style={styles.updateButton}>Update</Text>
      </View>
    </View>
  );
}
function renderOrderSection() {
  return (
    <View style = {styles.orderSection}>
      {renderOrderCostRow('SubTotal', '160 ' + CURENCY)}
      {renderOrderCostRow('Shipping', 'Free')}
      <View style={styles.horizontalRow} />
      {renderOrderCostRow('Total', '160' + CURENCY)}
    </View>
  );
}
function renderButton() {
  return <View style = {styles.renderButton}>
      <AppButton title = "BUY" titleStyle = {styles.titleStyle} />
  </View>;
}

export function CheckOut(props) {
  return (
    <View style = {styles.container}>
      {renderAdressSection()}
      {renderOrderSection()}
      {renderButton()}
    </View>
  );
}
