import {ScaledSheet} from 'react-native-size-matters';
import {MainFont} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    margin: '4@s',
    fontSize: '15@s',
    color: MainFont,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    margin: '4@s',
    color: '#999',
    fontSize: '13@s',
  },
});

export default styles;
