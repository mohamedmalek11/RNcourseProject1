import {ScaledSheet} from 'react-native-size-matters';
import {MainFontDarker} from '../../utils/colors'

const stlyes = ScaledSheet.create({
  image: {
      width: '100@s',
      height: '100@s',
  },
  container: {
    flexDirection: 'row',
    padding: '10@s',
    marginVertical: '10@vs',
    marginHorizontal: '20@s',
    backgroundColor: '#fff',
    borderRadius: '3@s'
  },
  CartContent:{
      padding: '10@s',
      flex:1,
      justifyContent: 'space-between',
  },
  title: {
      fontSize: '15@s'
  },
  statusWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: '17@s',
    fontWeight: 'bold',
    color: MainFontDarker
  },
});
export default stlyes;
