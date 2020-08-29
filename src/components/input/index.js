import React from 'react';
import {TextInput, View} from 'react-native';

export function Input(props) {
  const {underlined, underlinedColore, underlinedHeight, ...rest} = props;

  return (
    <View>
      <TextInput {...rest} style={{padding: 1}} />
      {underlined && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColore || '#bbb',
            marginTop: 3,
          }}
        />
      )}
    </View>
  );
}
