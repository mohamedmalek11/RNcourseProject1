import {StyleSheet} from 'react-native';

const incDecBtnColor = '#eeeeee';

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 200,
    minHeight: 50,
  },
  buttun: {
   flex: 50,
  },
  increaseDecreaseContainer: {
    flexDirection: 'row',
    backgroundColor: incDecBtnColor,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: incDecBtnColor,
  },
  text: {fontSize: 30},
  plusMinus: {
    padding: 12,
    
  },
});

export default styles;