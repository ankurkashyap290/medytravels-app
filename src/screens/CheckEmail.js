import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../styles/theme.style';
const CheckEmail = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Check Your Email</Text>
        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
            <Text style={styles.tagline}>
              We have sent a password recover instructions to your email.
            </Text>

            <Text style={styles.anotherEmail}>
              Did not receive the email? Check your spam filter, or try another
              email address
            </Text>
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Open Email App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckEmail;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    alignContent: 'center',
    flex: 1,
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    resizeMode: 'cover',
    width: '100%',
    height: 500,
  },
  outerBox: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  headingText: {
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },
  innerBox: {
    width: 300,
  },
  whiteBgBox: {
    backgroundColor: theme.APP_BACKGROUND,
    overflow: 'hidden',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 60,
    paddingBottom: 50,
    textAlign: 'center',
    width: '100%',
    borderRadius: 30,
    marginBottom: 15,
  },
  tagline: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BLACK_COLOR,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    fontFamily: 'Lato-thin',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  anotherEmail: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 12,
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: theme.BLACK_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: 'Lato-thin',
  },
});
