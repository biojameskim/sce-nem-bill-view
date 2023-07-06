import { StyleSheet } from 'react-native';

import { COLORS } from '../constants';

const styles = StyleSheet.create({
  headerBtn: (selected) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selected ? COLORS.leaf : COLORS.white,
    borderWidth: 1,
    borderColor: selected === 'true' ? COLORS.leaf : COLORS.leaf,
    borderRadius: '80%',
    padding: 5,
  }),
  headerBtnText: (selected) => ({
    color: selected ? 'white' : 'black',
    textAlign: 'center',
  }),
})

export default styles;