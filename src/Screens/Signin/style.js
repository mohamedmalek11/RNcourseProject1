import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '70@vs',
  },
  mianText: {
    fontSize: '20@s',
  },
  mianTextWrapper: {
    alignItems: 'center',
  },
  WrapperStyle: {
    paddingHorizontal: '60@s',
  },
  InputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  ButtonStyle: {
    fontSize : "15@s",
    fontWeight: 'bold'
  },
  ButtonWrapperStyle: {
    flex: 1,
    paddingHorizontal: '30@s',
    justifyContent: 'flex-end',
    paddingBottom: '40@vs',
  },
  IconStyle: {
    fontSize: 24,
    marginRight: 5,
    marginBottom:5,
  },
});
export default styles;
