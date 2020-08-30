import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import styles from './styles';

export class AppButton extends React.Component {
  render() {
    const {title, WrapperStyle, titleStyle, isLoading, ...rest} = this.props;

    return (
      <PlatformTouchable
        {...rest}
        disabled={isLoading}
        style={[styles.wrapper, WrapperStyle]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </PlatformTouchable>
    );
  }
}
