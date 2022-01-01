import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
    backgroundColor: '#0077b6',
    alignContent: 'center',
    flex: 1,
  },
  outerBox: {
    textAlign: 'center',
  },
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  innerBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#023e8a',
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  textInput: {
    color: '#fff',
    fontSize: 14,
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
    backgroundColor: '#023e8a',
  },
  TextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  already: {
    fontSize: 16,
    color: '#fff',
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
