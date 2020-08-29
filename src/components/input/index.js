import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

export function Input(props) {
  const {
    underlined,
    underlinedColore,
    underlinedHeight,
    borderd,
    borderWidth,
    borderRadius,
    borderColor,
    placeholderPosition,
    renderIconLeft,
    renderIconRight,
    stacked,
    placeholder,
    placeholderColore,
    style,
    IconWrapperStyle,
    WrapperStyle,
    ...rest
  } = props;

  return (
    <View
      style={[
        borderd && {
          borderWidth: borderWidth || 1,
          padding: 5,
          borderRadius: borderRadius || 5,
          borderColor: borderColor || '#bbb',
        },
        WrapperStyle,
      ]}>
      {stacked && (
        <Text style={{color: placeholderColore || '#000'}}>{placeholder}</Text>
      )}

      <View
        style={ {
          flexDirection: 'row',
          justifyContent: placeholderPosition || 'flex-start',
        }}>
        {renderIconLeft && (
          <View style={[styles.IconWrapper,IconWrapperStyle]}>{renderIconLeft()}</View>
        )}
        <TextInput
          placeholder={stacked ? '' : placeholder}
          {...rest}
          style={[{padding: 2}, style]}
        />
        {renderIconRight && (
          <View style={styles.IconWrapper}>{renderIconRight()}</View>
        )}
      </View>

      {(underlined || stacked) && (
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
const styles = StyleSheet.create({
  IconWrapper: {
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
