import {StyleSheet} from 'react-native';
import theme from '../styles/theme.style';
export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
    backgroundColor: theme.WHITE_COLOR,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 60,
    padding: 10,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
  },
  mainCar: {
    width: 390,
    overflow: 'hidden',
  },
  tinyLogo: {
    width: 390,
    height: 320,
  },
  tagLine: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 40,
    color: '#333',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },
  nextButton: {
    marginTop: 26,
    backgroundColor: theme.PRIMARY_COLOR,
    // paddingLeft: 26,
    // paddingRight: 26,
    // paddingTop: 10,
    // paddingBottom: 10,
    borderRadius: 100,
    width: 60,
    height: 60,
    textAlign: 'center',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginText: {
    // paddingRight: 0,
    // fontSize: 20,
    // color: theme.BLACK_COLOR,
  },
  arrowRight: {
    fontSize: 36,
    color: theme.BLACK_COLOR,
  },
});
