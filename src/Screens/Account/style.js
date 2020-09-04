import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  InfoSection: {
    flexDirection: 'row',
    padding: '10@s',
  },
  renderButtonSection: {
    flex: 1,
  },

  iconTextWrapper: {
    flexDirection: 'row',
    paddingVertical: '10@vs',
    alignItems: 'center',
  },
  renderInfoButton: {
    paddingHorizontal: '20@s',
  },
  personIcon: {
    fontSize: '100@s',
    paddingHorizontal: '10@s',
  },
  VerticalLine: {
    width: 1,
    backgroundColor: '#606060',
    marginVertical: '10@vs',
  },
  infoTextWrapper: {
    padding: '10@s',
    paddingHorizontal: '30@s',
    flex: 1,
  },
  TextInfo: {
    fontSize: '20@s',
    paddingVertical: '10@vs',
  },
  infoUnderLine: {
    height: 1,
    backgroundColor: '#ddd',
  },
  InfoText: {
    fontSize: '17@s',
    margin: '5@s',
  },
  InfoIcon: {
    fontSize: '25@s',
    margin: '5@s',
  },
});

export default styles;
