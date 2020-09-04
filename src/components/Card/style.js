import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  container: Platform.select({
    android: {
      elevation: 10,
      backgroundColor: '#fff',
      borderRadius:5,
      padding: 4,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 5},
      padding: 5,
    },
    
  }),
});

export default styles;