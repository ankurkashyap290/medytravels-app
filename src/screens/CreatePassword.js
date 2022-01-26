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
const CreatePassword = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Create Password</Text>
        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
            <Text style={styles.tagline}>
              Your new password must be different from pervious used password.
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
            <Text style={styles.matchPassword}>
              Must be at least 8 characters.
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
            <Text style={styles.matchPassword}>Both password must match.</Text>
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Reset Password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreatePassword;

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
    fontFamily: 'Lato-thin',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  matchPassword: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.BLACK_COLOR,
    marginBottom: 10,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 12,
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
});
