import { StyleSheet } from 'react-native';

import { SIZES, FONT, COLORS } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.medium,
    width: '25%'
  },
  addressIcon: {
    width: 25,
    height: 20,
  },
  address: {
    width: '75%'
  },
  addressText: {
    textAlign: 'center',
    textTransform: 'uppercase', 
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.medium,
  },
  separator: {
    padding: 1,
    backgroundColor: COLORS.edisonLightGray,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    shadowOffset: { height: 2, width: 0},
    elevation: 2
  }
});

export default styles