import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import theme from '../styles/theme.style';
const OTP = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>
          Verify your code sent to your contact number
        </Text>
        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
            <Text style={styles.tagline}>Please enter your code below</Text>
            <View style={styles.innerCode}>
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Submit Code </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.TextStyle}> Resend Code </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OTP;

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
    paddingLeft: 20,
    paddingRight: 20,
  },
  headingText: {
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Lato-Bold',
    fontWeight: '900',
    width: 300,
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
    fontFamily: 'Lato-thin',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textInput: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: theme.BLACK_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: 'Lato-thin',
  },
  resendButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    backgroundColor: theme.BLACK_COLOR,
    fontFamily: 'Lato-thin',
    marginTop: 10,
  },
  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  innerCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
