import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../Screens/Account';
import {AdressScreen} from '../Screens/Adress';
import {OrdersScreen} from '../Screens/Orders';
import {UpdateAccountScreen} from '../Screens/UpdateAccount';

const Stack = createStackNavigator();

export function AccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        
      />
      <Stack.Screen name="AdressScreen" component={AdressScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen
        name="UpdateAccountScreen  "
        component={UpdateAccountScreen}
      />
    </Stack.Navigator>
  );
}
