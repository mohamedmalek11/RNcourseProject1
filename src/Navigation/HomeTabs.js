import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {IonIcon} from '../components/IonIcon';
import {MainFont, GrayDark} from '../utils/colors';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconName = {
          Home: 'home',
          Search: 'search',
          Cart: 'cart',
          Account: 'person',
        };

        const label = {
          Home: 'Home',
          Search: 'Search',
          Cart: 'Cart',
          Account: 'Account',
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
      <Tabs.Screen name="Home" component={() => <Text>hello</Text>} />
      <Tabs.Screen name="Cart" component={() => <Text>hello</Text>} />
      <Tabs.Screen name="Search" component={() => <Text>hello</Text>} />
      <Tabs.Screen name="Account" component={() => <Text>hello</Text>} />
    </Tabs.Navigator>
  );
}
