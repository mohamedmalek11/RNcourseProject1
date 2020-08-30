import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

//Chang Style For Every Platform (in App Button)
export class PlatformTouchable extends React.Component {
  render() {
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return <Touchable {...this.props} />;
  }
}
