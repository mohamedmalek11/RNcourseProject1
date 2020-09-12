import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function Input(props) {
  // import Styles and Var from outside:
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
    showValidationFeedback,
    isValed,
    touched,
    placeholderSize,
    ...rest
  } = props;

  return (
    <View
      style={[
        // Borderd View:
        borderd && {
          borderWidth: borderWidth || 1,
          padding: 5,
          borderRadius: borderRadius || 5,
          borderColor: borderColor || '#bbb',
        },
        WrapperStyle,
      ]}>
      {stacked && (
        <Text
          style={{
            color: placeholderColore || '#aaa',
            fontSize: placeholderSize || 15,
          }}>
          {placeholder}
        </Text>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: placeholderPosition || 'space-between',
        }}>
        {renderIconLeft && (
          // Adds Icon to Inputs
          <View style={[styles.IconWrapper, IconWrapperStyle]}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          placeholder={stacked ? '                         ' : placeholder}
          {...rest}
          style={style}
        />
        {renderIconRight && (
          <View style={[styles.IconWrapper, IconWrapperStyle]}>
            {renderIconRight()}
          </View>
        )}
        {showValidationFeedback && touched && (
          <Icon
            name={isValed ? 'checkmark' : 'close'}
            style={{fontSize: 18, color: isValed ? 'green' : '#d12b2b'}}
          />
        )}
      </View>

      {(underlined || stacked) && (
        <View
          // UnderLined And Stacked View:
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
