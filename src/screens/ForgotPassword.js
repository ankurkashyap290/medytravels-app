import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import theme from '../styles/theme.style';
const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Reset Password</Text>
        <View style={styles.innerBox}>
          <Text style={styles.tagline}>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Email"
              placeholderTextColor="#000"
            />
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Send instructions </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    alignContent: 'center',
    flex: 1,
  },
  outerBox: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  headingText: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    width: 300,
  },
  tagline: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  textInput: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    marginBottom: 15,
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    backgroundColor: theme.SECONDARY_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
  },

  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
});
