import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width / 4;
const ImageHight = ImageWidth * 1.5;

const styles = ScaledSheet.create({
  container: {
   alignItems: 'center'
  },
  imageWrapper: {},
  imageStyle: {
    width: ImageWidth,
    height: ImageHight,
    borderRadius: 5,
    margin: 0,
  },
  titleWrapper: {
    marginTop: 10,
    
  },
  categoryTitle: {
    marginTop: '10@vs',
    marginBottom: '10@s',
    fontSize: '13@s'
  },
});
export default styles;
