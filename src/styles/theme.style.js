import {DefaultTheme} from 'react-native-paper';
// const darkBlue = "#ffca2f";
const primaryColor = '#FFC100';
const secondaryColor = '#ffb83d';

// const infoColor = "#61C2FF";
// const brightGreen = "#1DFF00";
// const successColor = "#54B948";
const dangerColor = '#FE4A5E';
const warningColor = '#DD9900';
const blackColor = '#0c0300';
const black100 = '#454F63';
// const black86 = "#4F4F4F";
// const black60 = "#858585";
// const black36 = "#B5B5B5";
// const black16 = "#DEDEDE";
// const black4 = "#F7F7F7";
const offWhite = '#F8FCFF';
const whiteColor = '#F8FCFF';

const theme = {
  ...DefaultTheme,
  colors: {
    primary: primaryColor,
    // accent: lightBlue,
    background: '#ffffff',
    surface: '#ffffff',
    error: dangerColor,
    text: black100,
    onBackground: black100,
    onSurface: black100,
  },
  fonts: {
    ios: {
      regular: {
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Lato-Bold',
        fontWeight: '500',
      },
      light: {
        fontFamily: 'Lato-Light',
        fontWeight: '300',
      },
      thin: {
        fontFamily: 'Lato-Thin',
        fontWeight: '100',
      },
    },
    default: {
      regular: {
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Lato-Bold',
        fontWeight: '500',
      },
      light: {
        fontFamily: 'Lato-Light',
        fontWeight: '300',
      },
      thin: {
        fontFamily: 'Lato-Thin',
        fontWeight: '100',
      },
    },
  },
};

export default {
  FONT_SIZE_EXTRA_SMALL: 13,
  FONT_SIZE_SMALL: 14,
  FONT_SIZE_MEDIUM: 16,
  FONT_SIZE_MEDIUM_OVER: 18,
  FONT_SIZE_LARGE: 20,
  FONT_SIZE_EXTRA_LARGE: 30,
  PRIMARY_COLOR: primaryColor,
  SECONDARY_COLOR: secondaryColor,
  FONT_WEIGHT_LIGHT: '300',
  FONT_WEIGHT_MEDIUM: '600',
  FONT_WEIGHT_HEAVY: '800',
  APP_BACKGROUND: '#ffffff',
  ERROR_COLOR: warningColor,
  ACTIVE_COLOR: '#64bc46',
  BLACK_COLOR: blackColor,
  WHITE_COLOR: whiteColor,
  INACTIVE_COLOR: '#000000',
  // LIGHT_BLUE: lightBlue,
  DEFAULT_THEME: theme,
};
