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
const CheckEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Check Your Email</Text>
        <View style={styles.innerBox}>
          <Text style={styles.tagline}>
            We have sent a password recover instructions to your email.
          </Text>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Open Email App</Text>
          </TouchableOpacity>
          <Text style={styles.anotherEmail}>
            Did not receive the email? Check your spam filter, or try another
            email address
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CheckEmail;

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
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 15,
    paddingRight: 15,
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
    fontFamily: 'Lato-thin',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  anotherEmail: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#000',
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
    backgroundColor: theme.SECONDARY_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: 'Lato-thin',
  },
});
