import React from 'react';
import {View, Text} from 'react-native';
import {IonIcon} from '../../components/IonIcon';
import styles from './style';

function renderInfoSection() {
  return (
    <View style={styles.InfoSection}>
      <IonIcon name="person" style={styles.personIcon} />
      <View style={styles.VerticalLine} />
      <View style={styles.infoTextWrapper}>
        <Text style={styles.TextInfo}>Person Name </Text>
        <Text style={styles.TextInfo}>01154363456</Text>
      </View>
    </View>
  );
}

function renderInfoButton(iconName, title) {
  return (
    <View style={styles.renderInfoButton}>
      <View style = {styles.iconTextWrapper}>
        <IonIcon name={iconName} style={styles.InfoIcon} />
        <Text style={styles.InfoText}>{title}</Text>
      </View>

      <View style={styles.infoUnderLine} />
    </View>
  );
}

function renderButtonSection() {
  return (
    <View style={styles.renderButtonSection}>
      {renderInfoButton('person-outline', 'Profile')}
      {renderInfoButton('navigate-outline', 'Shipping Adresses')}
      {renderInfoButton('cart-outline', 'Orders')}
      {renderInfoButton('log-out-outline', 'Log Out')}
    </View>
  );
}

export function AccountScreen(props) {
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtonSection()}
    </View>
  );
}
