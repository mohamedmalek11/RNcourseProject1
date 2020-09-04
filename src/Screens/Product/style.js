import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imageDim = width;

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
  image: {
    width: imageDim,
    height: imageDim,
  },
  productTitleWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: '25@s',
  },
  title: {
    color: '#fff',
    fontSize: '17@s',
  },
  titleWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtunWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: '10@s',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    padding: '10@s',
  },
  desciptionText: {
    fontSize: '18@s',
    marginBottom: '10@s',
    color: '#606060'
  },
  desciptionContent:{
    fontSize: '13@s'
  },
  ProductDetails: {},
});

export default styles;
