import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'flex-end',
  },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15@s',
  },
  totalText: {
      fontSize: '17@s'
  },
  buttonText: {
      fontSize: '15@s'
  },
});

export default styles;
