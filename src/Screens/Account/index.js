import React from 'react';
import {View, Text} from 'react-native';
import {IonIcon} from '../../components/IonIcon';
import {PlatformTouchable} from '../../components/PlatformTouchable';
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

function renderInfoButton(iconName, title, onPress) {
  return (
    <PlatformTouchable style={styles.renderInfoButton} onPress={onPress}>
      <View style={styles.iconTextWrapper}>
        <IonIcon name={iconName} style={styles.InfoIcon} />
        <Text style={styles.InfoText}>{title}</Text>
      </View>

      <View style={styles.infoUnderLine} />
    </PlatformTouchable>
  );
}

function renderButtonSection(navigation) {
  return (
    <View style={styles.renderButtonSection}>
      {renderInfoButton('person-outline', 'Profile', () =>
        navigation.navigate('UpdateAccountScreen'),
      )}
      {renderInfoButton('navigate-outline', 'Shipping Adresses', () =>
        navigation.navigate('AdressScreen'),
      )}
      {renderInfoButton('cart-outline', 'Orders', () =>
        navigation.navigate('OrdersScreen'),
      )}
      {renderInfoButton('log-out-outline', 'Log Out', () => {})}
    </View>
  );
}

export function AccountScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtonSection(navigation)}
    </View>
  );
}
