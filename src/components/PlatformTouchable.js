import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

//Chang Style For Every Platform (in App Button)
export class PlatformTouchable extends React.Component {
  render() {
    const {style, TouchableStyle, ...rest} = this.props;
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
      //Fixed App Button  Stule Issue:
      <View style={style}>
        <Touchable {...rest} style={TouchableStyle} />
      </View>
    );
  }
}
