import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
    paddingVertical: '30@s',
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  titleStyle: {
    fontSize: '16@s',
    fontWeight: 'bold',
  },
  placeholderstyle: {
    padding: 0,
  },
  InputWrapperStyle: {
      marginBottom: '15@vs'
  },
});

export default styles;
