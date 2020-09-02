import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width / 4;
const ImageHight = ImageWidth * 1.5;

const styles = ScaledSheet.create({
  container: {
   
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
});
export default styles;
