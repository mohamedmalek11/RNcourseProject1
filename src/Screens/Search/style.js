import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '20@s',
  },
  SearchIcon: {
    fontSize: '20@s',
    color: '#aaa',
  },
  IconWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    padding: '5@s',
  },
  placeholder: {
      paddingLeft: '5@s',
      fontSize: '14@s'
  },
});

export default styles;
