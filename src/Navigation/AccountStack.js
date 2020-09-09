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
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Adress"
        component={AdressScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Update Account"
        component={UpdateAccountScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
