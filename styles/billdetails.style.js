import { StyleSheet } from 'react-native';

import { SIZES, FONT, COLORS } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
  },
  headerText: {
    textAlign: 'center',
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.edisonGray,
    marginTop: 18,
    marginBottom: -2
  },
});

export default styles