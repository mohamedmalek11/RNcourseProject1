import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  shipToContainer: {
    padding: '10@s',
    margin: '15@s',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#aaa',
  },
  shipToText: {
    fontSize: '20@s',
    fontWeight: 'bold',
    paddingVertical: '10@s',
  },
  Adress: {
    fontSize: '15@s',
  },
  updateButton: {
    fontSize: '15@s',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  updateButtonWrapper: {
    alignItems: 'flex-end',
  },
  renderOrderCostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20@s',
  },
  orderSection: {
      flex:2,
      justifyContent: 'flex-end',
  },
  horizontalRow: {
    height: 1,
    backgroundColor: '#bbb',
    marginVertical: '10@s',
    marginHorizontal: '20@s',
  },
  orderCostValue: {
    fontSize: '14@s',
  },
  orderCostKey: {
    fontSize: '14@s',
    color: '#606060',
  },
  renderButton: {
      flex: 1,
      justifyContent: 'flex-end',
      margin: '20@s'
  },
  titleStyle: {
      fontSize: '18@s'
  },
});
export default styles;
