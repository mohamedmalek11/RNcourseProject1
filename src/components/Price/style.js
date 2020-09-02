import {ScaledSheet} from 'react-native-size-matters';
import {MainFont} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    margin: '5@s',
    fontSize: '17@s',
    color: MainFont,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    margin: '5@s',
    color: '#999',
    fontSize: '14@s',
  },
  newPrice: {
    color: 'red',
    margin: '5@s',
    fontSize: '17@s',
  },
});

export default styles;
