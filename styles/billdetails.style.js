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
  header2Text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginVertical: 30
  },
  box: {
    marginTop: 20,
    marginBottom: 30
  },
  headerContainer: {
    marginLeft: 20
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  nemHeader: {
    fontSize: SIZES.large,
    fontWeight: '600',
    color: 'black',
  },
  tooltip: {
    marginLeft: 10,
  },
  text: {
    paddingLeft: 10,
    color: 'black',
  },
  balance: {
    textAlign: 'center',
    fontSize: SIZES.xxLarge,
    fontWeight: '500',
    marginTop: 25,
    color: 'black',
  },
  projection: {
    width: 350,
    height: 150,
    alignSelf: 'center',
    marginTop: 5
  },
  monthlyMessage: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 50

  },
  monthly: {
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
  link: {
    textAlign: 'center',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 20,
    color: COLORS.kiwi
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.edisonLightGray,
    borderWidth: 1,
    borderColor: COLORS.edisonGray,
    paddingHorizontal: 35,
    paddingBottom: 35,
    paddingTop: 20, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 18
  },
  modalText2: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.edisonGray,
    marginBottom: 30
  },
  modalText3: {
    fontSize: 15
  },
  modalClose: {
    width: 32,
    alignSelf: 'flex-end',
    marginBottom: 15,
  }
});

export default styles