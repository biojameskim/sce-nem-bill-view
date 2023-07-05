import { StyleSheet } from 'react-native';

import { SIZES, FONT, COLORS } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  header: { 
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  }
})

export default styles;