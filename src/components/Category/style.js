import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ImageWidth = width / 3.5;
const ImageHight = ImageWidth * 1;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {},
  imageStyle: {
    width: ImageWidth,
    height: ImageHight,
    borderRadius: 10,
    margin: 5,
  },
  titleWrapper: {
    marginTop: 5,
  },
});
export default styles;
