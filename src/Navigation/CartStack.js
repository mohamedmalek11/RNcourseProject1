import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../Screens/Cart';
import {ProductScreen} from '../Screens/Product';

const Stack = createStackNavigator();

export function CartStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
