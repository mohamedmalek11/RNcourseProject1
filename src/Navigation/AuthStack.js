import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../Screens/Signin';
import {ConfirmationCodeScreen} from '../Screens/ConfirmationCode';

const Stack = createStackNavigator();

export function AuthStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmationCodeScreen"
        component={ConfirmationCodeScreen}
        options = {{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
