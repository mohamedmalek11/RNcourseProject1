import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen} from '../Screens/Search';
import {ProductScreen} from '../Screens/Product';

const Stack = createStackNavigator();

export function SearchStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
       
      />
      <Stack.Screen 
      name="ProductScreen" 
      component={ProductScreen} />
    </Stack.Navigator>
  );
}
