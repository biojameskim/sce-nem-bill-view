import { StyleSheet } from 'react-native';

import { SIZES, FONT, COLORS } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.edisonGray,
    marginTop: 18,
    marginBottom: -2
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  balanceAmt: {
    fontSize: SIZES.xxxLarge,
    fontWeight: 'bold'
  },
  balanceText: {
    fontSize: SIZES.large, 
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  payContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  billText: {
    fontSize: SIZES.medium,
    color: COLORS.edisonGray,
    textAlign: 'center',
    marginBottom: 4
  }
});

export default styles