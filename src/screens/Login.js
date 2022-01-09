import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import theme from '../styles/theme.style';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Log In</Text>

        <View style={styles.innerBox}>
          <Text style={styles.tagline}>Lets' login to your account</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="User Name"
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#000"
            />

            <TouchableOpacity style={styles.SubmitButtonStyle}>
              <Text style={styles.TextStyle}> LogIn </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lastLInks}>
          <Text style={styles.already}>Don't have an account ?</Text>
          <TouchableOpacity style={styles.goLoginButton}>
            <Text style={styles.TextStyle}> Sing Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  tagline: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
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
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  already: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.APP_BACKGROUND,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  goLoginButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    backgroundColor: '#111',
    width: 200,
  },
});
