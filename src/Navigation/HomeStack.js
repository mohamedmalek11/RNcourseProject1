import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/Home';
import {CategoryScreen} from '../Screens/Category';
import {ProductScreen} from '../Screens/Product'

const Stack = createStackNavigator();

export function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
      />
       <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
