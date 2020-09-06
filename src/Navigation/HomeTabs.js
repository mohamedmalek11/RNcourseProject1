import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {HomeStack} from './HomeStack';
import {CartStack} from './CartStack';
import {SearchStack} from './SearchStack';
import {AccountStack} from './AccountStack';
import {IonIcon} from '../components/IonIcon';
import {MainFont, GrayDark} from '../utils/colors';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconName = {
          HomeStack: 'home',
          SearchStack: 'search',
          CartStack: 'cart',
          AccountStack: 'person',
        };

        const label = {
          HomeStack: 'Home',
          SearchStack: 'Search',
          CartStack: 'Cart',
          AccountStack: 'Account',
        };

        return {
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={iconName[route.name]}
              style={{color: focused ? MainFont : GrayDark, fontSize: 24}}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{color: focused ? MainFont : GrayDark, fontWeight: 'bold'}}>
              {label[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      <Tabs.Screen name="CartStack" component={CartStack} />
      <Tabs.Screen name="SearchStack" component={SearchStack} />
      <Tabs.Screen name="AccountStack" component={AccountStack} />
    </Tabs.Navigator>
  );
}
