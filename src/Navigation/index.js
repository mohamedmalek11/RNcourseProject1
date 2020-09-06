import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {Text} from 'react-native';

function HomeTabs(props) {
  return <Text>HomeTabs</Text>;
}

export function AppContainer(props) {
  const {isAuthenticated} = props;

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
