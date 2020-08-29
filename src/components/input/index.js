import React from 'react';
import {TextInput, View} from 'react-native';

export function Input(props) {
  const {
    underlined,
    underlinedColore,
    underlinedHeight,
    borderd,
    borderWidth,
    borderRadius,
    borderColor,
    ...rest
  } = props;

  return (
    <View
      style={
        borderd && {
          borderWidth: borderWidth || 1,
          padding: 5,
          borderRadius: borderRadius || 5,
          borderColor: borderColor || '#bbb',
        }
      }>
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
