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
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Sign Up</Text>

        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
            <Text style={styles.tagline}>Lets' signup for your account</Text>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Full Name"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Mobile Number"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Your Password"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Sign Up </Text>
          </TouchableOpacity>
          <Text style={styles.already}>Already have an account ?</Text>
          <TouchableOpacity style={styles.goLoginButton}>
            <Text style={styles.TextStyle}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    width: '100%',
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    backgroundColor: theme.BLACK_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: 'Lato-thin',
  },
  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  already: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BLACK_COLOR,
    marginBottom: 15,
    marginTop: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    fontFamily: 'Lato-thin',
    textAlign: 'center',
  },
  goLoginButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    backgroundColor: theme.BLACK_COLOR,
    fontFamily: 'Lato-thin',
  },
});
